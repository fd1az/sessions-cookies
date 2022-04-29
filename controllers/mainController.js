const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res) => {
    const data = req.session;
    res.render("index", { data });
  },
  store: (req, res) => {
    let errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.render("index", { errors: errors.errors });
    }

    req.session.name = req.body.name;
    req.session.color = req.body.color;
    req.session.email = req.body.email;
    req.session.age = req.body.age;

    if (req.body.recordar_color) {
      res.cookie("color", req.body.color, { maxAge: 60 * 1000 });
    }
    res.redirect("/");
  },
};
