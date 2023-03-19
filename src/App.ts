import express from "express";
import morgan from "morgan";
import cors from "cors";
import { userRoute } from "./routes";
import { errorHandler, routeHandler } from "./middleware";

export const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));

app.use("/api/users", userRoute);

app.use(routeHandler);
app.use(errorHandler);
