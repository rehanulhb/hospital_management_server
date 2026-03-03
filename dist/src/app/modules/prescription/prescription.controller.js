import {} from "express";
import httpStatus from "http-status";
import { prescriptionFilterableFields } from "./prescription.constants.js";
import pick from "../../helper/pick.js";
import { PrescriptionService } from "./prescription.service.js";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
const insertIntoDB = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await PrescriptionService.insertIntoDB(user, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Prescription created successfully",
        data: result,
    });
});
const patientPrescription = catchAsync(async (req, res) => {
    const user = req.user;
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await PrescriptionService.patientPrescription(user, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Prescription fetched successfully",
        meta: result.meta,
        data: result.data,
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const filters = pick(req.query, prescriptionFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await PrescriptionService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Prescriptions retrieval successfully",
        meta: result.meta,
        data: result.data,
    });
});
export const PrescriptionController = {
    insertIntoDB,
    patientPrescription,
    getAllFromDB,
};
//# sourceMappingURL=prescription.controller.js.map