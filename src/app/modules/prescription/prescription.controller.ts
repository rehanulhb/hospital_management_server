import catchAsync from "../../shared/catchAsync.js";
import type { Request, Response } from "express";
import sendResponse from "../../shared/sendResponse.js";
import type { IJWTPayload } from "../../types/common.js";
import { PrescriptionService } from "./prescription.service.js";
import httpStatus from "http-status";
import pick from "../../helper/pick.js";

const createPrescription = catchAsync(
  async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user;
    const result = await PrescriptionService.createPrescription(
      user as IJWTPayload,
      req.body,
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "prescription created successfully!",
      data: result,
    });
  },
);

const patientPrescription = catchAsync(
  async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user;
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await PrescriptionService.patientPrescription(
      user as IJWTPayload,
      options,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Prescription fetched successfully",
      meta: result.meta,
      data: result.data,
    });
  },
);

export const PrescriptionController = {
  createPrescription,
  patientPrescription,
};
