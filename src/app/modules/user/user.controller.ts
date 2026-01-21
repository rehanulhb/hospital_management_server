import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.js";
import { UserService } from "./user.service.js";
import sendResponse from "../../shared/sendResponse.js";

const createPatient = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createPatient(req);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Patient Created Successfully",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const { page, limit, searchTerm, sortBy, sortOrder, role, status } =
    req.query;
  const result = await UserService.getAllFromDB({
    page: Number(page),
    limit: Number(limit),
    searchTerm,
    sortBy,
    sortOrder,
    role,
    status,
  });

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User retrieved Successfully",
    data: result,
  });
});

export const UserController = {
  createPatient,
  getAllFromDB,
};
