const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./db/db");
const path = require("path");
var router = express.Router();

const app = express();
const PORT = process.env.PORT || 9001;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))


app.get("/", function (req, res) {
  console.log(res),
  res.render(path.join(__dirname, "/public/index.html"));
});

app.get("/allOrders", function(req, res) {
  connection.query("SELECT * FROM burgers", function (err, results) {
    if (err) {
      throw err;
    } else {
      res.json(results);
    }
  }
  );
});
app.post("/", function (req, res) {
  console.log(req.body.burger)
  const post = {
    burger_name: req.body.burger,
    devoured: false
  };
  connection.query(
    "INSERT INTO burgers (burger_name, devoured) VALUES (?,?)",
    [post.burger_name, post.devoured],
    function (err, results) {
      console.log(err, results);
    }
  );
});
app.put("/update/:id", (req, res) => {
  console.log("about to update", req.params);
  const sqlCommand = "UPDATE burgers SET devoured = ? WHERE id = ?";
  connection.query(sqlCommand, [true, req.params.id], function (err, results) {
    console.log(err, results);
    res.json(results);
  });
});
app.listen(PORT, function () {
  if (PORT > 9000) {
    console.log("YOUR PORTS!!! It's over nine thousand!!!!!! "  + "(actual level " + PORT + ")");
  } else {
    console.log("Your port level is low" + PORT);
  }
});