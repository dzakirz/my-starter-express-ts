import { RequestHandler } from "express";
import createHttpError from "http-errors";

export const routeHandler: RequestHandler = (req, res, next) => {
  next(createHttpError(404, "not found"));
};
