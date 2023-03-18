import asyncHandler from "express-async-handler";
import { RequestHandler } from "express";

export const sayHello: RequestHandler = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "hello", tes: "asas" });
});
