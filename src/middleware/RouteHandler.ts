import { RequestHandler } from "express";

export const routeHandler: RequestHandler = (req, res, next) => {
  next(Error("Endpoint Not Found"));
};
