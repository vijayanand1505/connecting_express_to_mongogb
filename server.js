const express = require("express");
const app = express();
const mongoose = require("mongoose");
const user = require("./user");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb://127.0.0.1:27017/crud",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to database");
    }
  }
);

app.get("/users", function (req, res) {
  user
    .find({})
    .then(function (user) {
      res.send(user);
      console.log(user);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.post("/users", function (req, res) {
  user
    .create({
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    })
    .then(function (user) {
      res.send(user);
      console.log(user);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.get("/users/:id", function (req, res) {
  user
    .findById(req.params.id)
    .then(function (user) {
      res.send(user);
      console.log(user);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.put("/users/:id", function (req, res) {
  user
    .findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      age: req.body.age,
      email: req.body.email,
    })
    .then(function (user) {
      res.send(user);
      console.log(user);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.delete("/users/:id", function (req, res) {
  user
    .findByIdAndDelete(req.params.id)
    .then(function (user) {
      res.send(user);
      console.log(user);
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.listen(3500, () => {
  console.log("running");
});
