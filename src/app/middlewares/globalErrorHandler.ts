import { Prisma } from "@prisma/client";
import type { NextFunction } from "express";

import httpStatus from "http-status";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  let statusCode: number = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  let success = false;
  let message = err.message || "Something went wrong!";
  let error = err;

  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    if (err.code === "P2002") {
      message = "Duplicate Key error";
      error = err.meta;
      statusCode = httpStatus.CONFLICT;
    }
    if (err.code === "P1000") {
      message = "Authentication failed against database server";
      error = err.meta;
      statusCode = httpStatus.BAD_GATEWAY;
    }
    if (err.code === "P2003") {
      message = "Forgeign key contraint failed";
      error = err.meta;
      statusCode = httpStatus.BAD_REQUEST;
    }
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    message = "Validation Error";
    error = err.message;
    statusCode = httpStatus.BAD_REQUEST;
  } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    message = "Unknown Prisma Error Occured";
    error = err.message;
    statusCode = httpStatus.BAD_REQUEST;
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    message = "Prisma Clinet failed to initialize Error Occured";
    error = err.message;
    statusCode = httpStatus.BAD_REQUEST;
  }

  return res.status(statusCode).json({
    success,
    message,
    error,
  });
};

export default globalErrorHandler;
