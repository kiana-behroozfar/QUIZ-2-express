const express = require("express");
const app = express();

app.get("/Math/:val1/:val2", (req, res) => {
  let { val1, val2 } = req.params;

  res.send(`<h1><i>Final is ${val1 * val2}</i></h1>`);
});

app.listen("4000", (req, res) => {
  console.log("Running on the port of 4000");
});
