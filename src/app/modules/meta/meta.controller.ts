import httpStatus from "http-status";

import catchAsync from "../../shared/catchAsync.js";
import type { Request, Response } from "express";
import sendResponse from "../../shared/sendResponse.js";
import type { IJWTPayload } from "../../types/common.js";
import { MetaService } from "./meta.service.js";

const fetchDashboardMetaData = catchAsync(
  async (req: Request & { user?: IJWTPayload }, res: Response) => {
    const user = req.user;
    const result = await MetaService.fetchDashboardMetaData(
      user as IJWTPayload,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Meta data retrival successfully!",
      data: result,
    });
  },
);

export const MetaController = {
  fetchDashboardMetaData,
};
