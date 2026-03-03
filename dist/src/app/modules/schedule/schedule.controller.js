import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import pick from "../../helper/pick.js";
import sendResponse from "../../shared/sendResponse.js";
import { ScheduleService } from "./schedule.service.js";
const insertIntoDB = catchAsync(async (req, res) => {
    const result = await ScheduleService.inserIntoDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedule created successfully!",
        data: result,
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const filters = pick(req.query, ["startDate", "endDate"]);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const user = req.user;
    const result = await ScheduleService.getAllFromDB(filters, options, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedule fetched successfully!",
        data: result.data,
        meta: result.meta,
    });
});
const getByIdFromDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ScheduleService.getByIdFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedule retrieval successfully",
        data: result,
    });
});
const deleteFromDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await ScheduleService.deleteFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Schedule deleted successfully",
        data: result,
    });
});
export const ScheduleController = {
    insertIntoDB,
    getAllFromDB,
    getByIdFromDB,
    deleteFromDB,
};
//# sourceMappingURL=schedule.controller.js.map