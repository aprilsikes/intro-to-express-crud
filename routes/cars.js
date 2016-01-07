var express = require('express');
var router = express.Router();
var carId;

// add your routes here
router.get("/cars", function (req, res) {
  res.render("cars/index")
});

router.get("/cars/new", function (req, res) {
  res.render("cars/new")
});

router.post("/cars", function (req, res) {
  res.redirect("/cars")
});

router.get("/cars/:id", function (req, res) {
  res.render("cars/show", { carId: req.params.id })
});

router.get("/cars/:id/edit", function (req, res) {
  res.render("cars/edit", { carId: req.params.id })
});

router.post("/cars/:id", function (req, res) {
  res.redirect("/cars", { carId: req.params.id })
});

router.post("/cars/:id/delete", function (req, res) {
  res.redirect("/cars", { carId: req.params.id })
});

module.exports = router;
