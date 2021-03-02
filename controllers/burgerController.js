const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.selectAll((data) => {
    const dataObj = { burgers: data };
    res.render("index", dataObj);
  });
});

router.post("/api/burgers", (req, res) => {
  burger.insertOne("burger_name", [req.body.name], (result) => {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", (req, res) => {
  const condition = `id = ${req.params.id}`;
  burger.updateOne("devoured = true", condition, (result) => {
    if (result.changedRows == 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

module.exports = router;
