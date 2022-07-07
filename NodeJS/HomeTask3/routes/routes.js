const router = require("express").Router();

const userC = require("../controllers/controllers");

router.post("/users", userC.createNewUser);

router.get("/users", userC.getAllUsers);

router.get("/users/:queryStr", userC.getParticularUser);

router.put("/users/:id", userC.updateParticularUser);

router.delete("/users/:id", userC.deleteParticularUser);

module.exports = router;
