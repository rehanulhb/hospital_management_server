import httpStatus from "http-status";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import pick from "../../helper/pick.js";
import { patientFilterableFields } from "./patient.constant.js";
import { PatientService } from "./patient.service.js";
const getAllFromDB = catchAsync(async (req, res) => {
    const filters = pick(req.query, patientFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await PatientService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Patient retrieval successfully",
        meta: result.meta,
        data: result.data,
    });
});
const getByIdFromDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PatientService.getByIdFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Patient retrieval successfully",
        data: result,
    });
});
const updateIntoDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PatientService.updateIntoDB(id, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Patient updated successfully",
        data: result,
    });
});
const deleteFromDB = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PatientService.deleteFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Patient deleted successfully",
        data: result,
    });
});
const softDelete = catchAsync(async (req, res) => {
    const { id } = req.params;
    const result = await PatientService.softDelete(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Patient soft deleted successfully",
        data: result,
    });
});
export const PatientController = {
    getAllFromDB,
    getByIdFromDB,
    updateIntoDB,
    deleteFromDB,
    softDelete,
};
//# sourceMappingURL=patient.controller.js.map