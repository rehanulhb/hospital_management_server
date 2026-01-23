import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.js";
import { UserService } from "./user.service.js";
import sendResponse from "../../shared/sendResponse.js";
import pick from "../../helper/pick.js";
import {
  UserFilterableFields,
  UserFilterableOptions,
} from "./user.constant.js";

const createPatient = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createPatient(req);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Patient Created Successfully",
    data: result,
  });
});

const createAdmin = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createAdmin(req);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Admin Created successfuly!",
    data: result,
  });
});

const createDoctor = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createDoctor(req);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Doctor Created successfuly!",
    data: result,
  });
});

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  //page, limit, sortBy, sortOrder, - Pagination, sorting
  //fields: searchTerm - searching, filtering

  const filters = pick(req.query, UserFilterableFields);
  const options = pick(req.query, UserFilterableOptions);

  const result = await UserService.getAllFromDB(filters, options);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "User retrieved Successfully",
    meta: result.meta,
    data: result.data,
  });
});

export const UserController = {
  createPatient,
  createAdmin,
  createDoctor,
  getAllFromDB,
};
