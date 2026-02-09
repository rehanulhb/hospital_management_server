import express from "express";

import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth.js";
import { AppointmentController } from "./appointment.controller.js";

const router = express.Router();

router.get(
  "/my-appointments",
  auth(UserRole.PATIENT),
  AppointmentController.getMyAppointment,
);

router.post(
  "/",
  auth(UserRole.PATIENT),
  AppointmentController.createAppointment,
);

export const AppointmentRoutes = router;
