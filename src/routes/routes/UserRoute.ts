import express from "express";
import { UserController } from "../../controllers";
import { protect } from "../../middleware";

const router = express.Router();

router.route("/").post(UserController.registerUser);
router.route("/login").post(UserController.loginUser);
router.route("/me").get(protect, UserController.getMe);

export { router as userRoute };
