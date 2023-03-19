import { ErrorRequestHandler } from "express";
import { env } from "../../utils";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;

  const isProduction = env.NODE_ENV === "production" ? null : err.stack;

  res.status(statusCode).json({
    message: err.message,
    stack: isProduction,
  });
};
