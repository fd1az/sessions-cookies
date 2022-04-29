const express = require("express");
const mainController = require("../controllers/mainController");
const route = express.Router();
const { check, body } = require("express-validator");

route.get("/", mainController.index);
route.post(
  "/",
  [check("name").notEmpty().withMessage("Campo requerido")],
  mainController.store
);

module.exports = route;
