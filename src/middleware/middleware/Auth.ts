import { RequestHandler } from "express";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import { env } from "../../utils";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const protect: RequestHandler = asyncHandler(
  async (req: any, res, next) => {
    let token;

    const header = req.headers.authorization && req.headers.authorization.startsWith("Bearer");

    if (header) {
      try {
        token = req.headers.authorization.split(" ")[1];

        const decoded = jwt.verify(token, env.JWT_SECRET) as any;

        req.user = await prisma.user.findUnique({
          where: { id: decoded.id },
          select: { id: true, email: true },
        });

        next();
      } catch (err) {
        console.log(err);
        res.status(401);
        throw new Error("NOT AUTHORIZED");
      }
    }
    if (!token) {
      res.status(401);
      throw new Error("NO TOKEN");
    }
  },
);
