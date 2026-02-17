import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { DoctorScheduleService } from "./doctorSchedule.service.js";
import type { IJWTPayload } from "../../types/common.js";
import pick from "../../helper/pick.js";
import httpStatus from "http-status";
import { scheduleFilterableFields } from "./doctorSchedule.constant.js";

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

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, scheduleFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await DoctorScheduleService.getAllFromDB(filters, options);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Doctor Schedule retrieval successfully",
    meta: result.meta,
    data: result.data,
  });
});

export const DoctorScheduleController = {
  insertIntoDB,
  getAllFromDB,
};
