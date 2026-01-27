import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { DoctorScheduleService } from "./doctorSchedule.service.js";
import type { IJWTPayload } from "../../types/common.js";

const insertIntoDB = catchAsync(
  async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user;
    const result = await DoctorScheduleService.insertIntoDB(
      user as IJWTPayload,
      req.body,
    );

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Doctor Schedule created Successfully",
      data: result,
    });
  },
);

export const DoctorScheduleController = {
  insertIntoDB,
};
