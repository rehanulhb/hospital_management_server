import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.js";
import { UserService } from "./user.service.js";
import sendResponse from "../../shared/sendResponse.js";

const createPatient = catchAsync(async (req: Request, res: Response) => {
  const result = await UserService.createPatient(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Patient Created Successfully",
    data: result,
  });
});

export const UserController = {
  createPatient,
};
