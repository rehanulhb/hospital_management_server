import httpStatus from "http-status";

import type { Request, Response } from "express";
import catchAsync from "../../shared/catchAsync.js";
import { MetaService } from "./meta.service.js";
import sendResponse from "../../shared/sendResponse.js";
import type { IAuthUser } from "../../interfaces/common.js";

const fetchDashboardMetaData = catchAsync(
  async (req: Request & { user?: IAuthUser }, res: Response) => {
    const user = req.user;
    const result = await MetaService.fetchDashboardMetaData(user as IAuthUser);

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
