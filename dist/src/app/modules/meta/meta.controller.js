import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import { MetaService } from "./meta.service.js";
import sendResponse from "../../shared/sendResponse.js";
const fetchDashboardMetaData = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await MetaService.fetchDashboardMetaData(user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Meta data retrival successfully!",
        data: result,
    });
});
export const MetaController = {
    fetchDashboardMetaData,
};
//# sourceMappingURL=meta.controller.js.map