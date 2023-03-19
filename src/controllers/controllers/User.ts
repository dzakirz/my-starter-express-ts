import { generateToken } from "../../utils";
import asyncHandler from "express-async-handler";
import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const registerUser: RequestHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401);
    throw new Error("required all fields");
  }

  const user = await prisma.user.create({
    data: { email, password },
    select: { id: true, email: true },
  });

  res.status(200).json({ ...user, token: generateToken(user.id) });
});

export const loginUser: RequestHandler = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (user && user.password === password) {
    res.json({ ...user, token: generateToken(user.id) });
  }

  res.status(400);
  throw new Error("wrong credential");
});

export const getMe: RequestHandler = asyncHandler(async (req: any, res) => {
  res.status(200).json(req.user);
});
