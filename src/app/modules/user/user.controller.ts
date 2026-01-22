import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.js";
import { UserService } from "./user.service.js";
import sendResponse from "../../shared/sendResponse.js";
import pick from "../../helper/pick.js";

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
  //page, limit, sortBy, sortOrder, - Pagination, sorting
  //fields: searchTerm - searching, filtering

  const filters = pick(req.query, ["status", "role", "email"]);
  const options = pick(req.query, ["page", "limit", "sortBy", "sortOrder"]);

  const result = await UserService.getAllFromDB(filters, options);

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
