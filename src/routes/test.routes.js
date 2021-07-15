const express = require("express");
const router = express.Router();


/*Middlewares*/
// const { isAuth } = require("../middlewares/verifyAuth");

/*Controllers*/
const authController = require("../controllers/auth.controller");

/*Routes*/
// router.post("/register", authController.register);
router.post("/login", authController.get);

module.exports = router;
