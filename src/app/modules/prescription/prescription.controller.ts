import catchAsync from "../../shared/catchAsync.js";
import type { Request, Response } from "express";
import sendResponse from "../../shared/sendResponse.js";
import type { IJWTPayload } from "../../types/common.js";
import { PrescriptionService } from "./prescription.service.js";

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

export const PrescriptionController = {
  createPrescription,
};
