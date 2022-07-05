const express = require("express");

const routes = express.Router();

const houze = require("../houze");

routes.get("/", (req, res) => {
  res.status(200).json(houze);
});

routes.get("/house/all", (req, res) => {
  if (Object.values(req.query).length) {
    let response = houze.filter((value) =>
      value.name.toLowerCase().includes(req.query.name.toLowerCase())
    );
    res.json(response);
  } else {
    res.status(200).json(houze);
  }
});

routes.get("/house/:id", (req, res) => {
  let response = houze.filter((value) => value.id === Number(req.params.id));
  res.status(200).json(response);
});

module.exports = routes;
