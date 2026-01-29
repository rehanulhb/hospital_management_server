import express from "express";
import { DoctorScheduleController } from "./doctorSchedule.controller.js";
import auth from "../../middlewares/auth.js";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest.js";
import { DoctorScheduleValidation } from "./doctorSchedule.validation.js";

const router = express.Router();

router.post(
  "/",
  auth(UserRole.DOCTOR),
  validateRequest(
    DoctorScheduleValidation.createDoctorScheduleValidationSchema,
  ),
  DoctorScheduleController.insertIntoDB,
);

export const doctorScheduleRoutes = router;
