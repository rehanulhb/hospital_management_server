import express from "express";
import { DoctorScheduleController } from "./doctorSchedule.controller.js";
import auth from "../../middlewares/auth.js";
import { UserRole } from "@prisma/client";

const router = express.Router();

router.post("/", auth(UserRole.DOCTOR), DoctorScheduleController.insertIntoDB);

export const doctorScheduleRoutes = router;
