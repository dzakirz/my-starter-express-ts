import express from "express";
import morgan from "morgan";
import cors from "cors";
import { exampleRoute } from "./routes";
import { errorHandler, routeHandler } from "./middleware";

export const app = express();

app.use(cors());

app.use(express.json())

app.use(express.urlencoded({ extended: false }));

app.use(morgan("dev"));

app.use("/", exampleRoute);

app.use(routeHandler);

app.use(errorHandler);
