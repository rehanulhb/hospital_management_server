import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { SpecialtiesService } from "./specialties.service.js";
import pick from "../../helper/pick.js";
const insertIntoDB = catchAsync(async (req, res) => {
    const result = await SpecialtiesService.inserIntoDB(req);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Specialties created successfully!",
        data: result,
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await SpecialtiesService.getAllFromDB(options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Specialties data fetched successfully",
        meta: result.meta,
        data: result.data,
    });
});
const deleteFromDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await SpecialtiesService.deleteFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Specialty deleted successfully",
        data: result,
    });
});
export const SpecialtiesController = {
    insertIntoDB,
    getAllFromDB,
    deleteFromDB,
};
//# sourceMappingURL=specialties.controller.js.map