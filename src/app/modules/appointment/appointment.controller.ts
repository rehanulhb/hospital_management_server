import type { IJWTPayload } from "../../types/common.js";
import sendResponse from "../../shared/sendResponse.js";
import { AppointmentService } from "./appointment.service.js";
import catchAsync from "../../shared/catchAsync.js";
import type { Request, Response } from "express";

const createAppointment = catchAsync(
  async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user;
    const result = await AppointmentService.createAppointment(
      user as IJWTPayload,
      req.body,
    );

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Appointment created successfully!",
      data: result,
    });
  },
);

export const AppointmentController = {
  createAppointment,
};
