import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.js";
import pick from "../../helper/pick.js";
import sendResponse from "../../shared/sendResponse.js";
import httpStatus from "http-status";
import { DoctorService } from "./doctor.service.js";
import { doctorFilterableFields } from "./doctor.constant.js";

const getAllFromDB = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const filters = pick(req.query, doctorFilterableFields);

  const result = await DoctorService.getAllFromDB(filters, options);

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctors Fetched successfully",
    meta: result.meta,
    data: result.data,
  });
});

export const DoctorController = {
  getAllFromDB,
};
