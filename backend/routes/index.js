  const User = require("../controller/userController");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/insert", User.create);

  // Retrieve all User
  router.get("/", User.findAll);

  // Retrieve all published User
  router.get("/published", User.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", User.findOne);

  // Update a Tutorial with id
  router.put("/:id", User.update);

  // Delete a Tutorial with id
  router.delete("/delete/:email", User.delete);

  // Delete all User
  router.delete("/", User.deleteAll);
  
  module.exports = router;
  