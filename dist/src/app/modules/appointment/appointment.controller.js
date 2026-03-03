import {} from "express";
import httpStatus from "http-status";
import pick from "../../helper/pick.js";
import { AppointmentService } from "./appointment.service.js";
import { appointmentFilterableFields } from "./appointment.constant.js";
import sendResponse from "../../shared/sendResponse.js";
import catchAsync from "../../shared/catchAsync.js";
const createAppointment = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await AppointmentService.createAppointment(user, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Appointment booked successfully!",
        data: result,
    });
});
const getMyAppointment = catchAsync(async (req, res) => {
    const user = req.user;
    const filters = pick(req.query, ["status", "paymentStatus"]);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await AppointmentService.getMyAppointment(user, filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "My Appointment retrive successfully",
        data: result.data,
        meta: result.meta,
    });
});
const getAllFromDB = catchAsync(async (req, res) => {
    const filters = pick(req.query, appointmentFilterableFields);
    const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
    const result = await AppointmentService.getAllFromDB(filters, options);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Appointment retrieval successfully",
        meta: result.meta,
        data: result.data,
    });
});
const changeAppointmentStatus = catchAsync(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const user = req.user;
    const result = await AppointmentService.updateAppointmentStatus(id, status, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Appointment status changed successfully",
        data: result,
    });
});
const createAppointmentWithPayLater = catchAsync(async (req, res) => {
    const user = req.user;
    const result = await AppointmentService.createAppointmentWithPayLater(user, req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Appointment booked successfully! You can pay later.",
        data: result,
    });
});
const initiatePayment = catchAsync(async (req, res) => {
    const user = req.user;
    const { id } = req.params;
    const result = await AppointmentService.initiatePaymentForAppointment(id, user);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Payment session created successfully",
        data: result,
    });
});
export const AppointmentController = {
    createAppointment,
    getMyAppointment,
    getAllFromDB,
    changeAppointmentStatus,
    createAppointmentWithPayLater,
    initiatePayment,
};
//# sourceMappingURL=appointment.controller.js.map