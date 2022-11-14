const User = require("../models/userModels");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);
  
  // Create a User
  const users = new User({
    email: req.body.email,
    name: req.body.name,
    birthday: req.body.birthday
  });

  User.create(users, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

// Retrieve all Users from the database (with condition).
exports.findAll = (req, res) => {
  const email = req.query.email;

  User.getAll(email, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    else res.send(data);
  });
};

// Find a single User by Id
exports.findOne = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving User with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Users
exports.findAllPublished = (req, res) => {
  User.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Users."
      });
    else res.send(data);
  });
};

// Update a User identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  User.updateById(
    req.params.id,
    new User(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found User with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a User with the specified email in the request
exports.delete = (req, res) => {
  User.remove(req.params.email, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found User with email ${req.params.email}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete User with email " + req.params.email
        });
      }
    } else res.send({ message: `User was deleted successfully!` });
  });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Users."
      });
    else res.send({ message: `All Users were deleted successfully!` });
  });
};
