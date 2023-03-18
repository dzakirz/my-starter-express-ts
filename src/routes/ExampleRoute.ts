import express from "express";
import * as ExampleController from "../controllers/Example";

const router = express.Router();

router.route("/").get(ExampleController.sayHello);

export { router as exampleRoute };
