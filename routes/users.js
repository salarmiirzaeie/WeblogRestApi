const { Router } = require("express");

const userController = require("../controllers/userController");
const { authenticated } = require("../middlewares/auth");

const router = new Router();

//  @desc   Login Handle
//  @route  POST /users/login
router.post("/login", userController.handleLogin);

router.put("/accept-tour", authenticated, userController.acceptTour);
router.post("/edit-profile", authenticated, userController.editProfile);
router.get("/profile", authenticated, userController.userProfile);

router.get("/isAuth", userController.isAuth);

//  @desc   Handle Forget Password
//  @route  POST /users/forget-password
router.post("/forget-password", userController.handleForgetPassword);

//  @desc   Handle reset Password
//  @route  POST /users/reset-password/:token
router.post("/reset-password/:token",userController.handleResetPassword);

//  @desc   Register Handle
//  @route  POST /users/register
router.post("/register", userController.createUser);

module.exports = router;
