import express from "express";
import { userRoutes } from "../modules/user/user.routes.js";
import { authRoutes } from "../modules/auth/auth.routes.js";
import { ScheduleRoutes } from "../modules/schedule/schedule.routes.js";
import { doctorScheduleRoutes } from "../modules/doctorSchedule/doctorSchedule.routes.js";
import { SpecialtiesRoutes } from "../modules/specialties/specialties.routes.js";
import { DoctorRoutes } from "../modules/doctor/doctor.routes.js";
import { AppointmentRoutes } from "../modules/appointment/appointment.routes.js";
import { AdminRoutes } from "../modules/admin/admin.routes.js";
import { PatientRoutes } from "../modules/patient/patient.routes.js";
import { PrescriptionRoutes } from "../modules/prescription/prescription.route.js";
import { ReviewRoutes } from "../modules/review/review.routes.js";
import { MetaRoutes } from "../modules/meta/meta.routes.js";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: userRoutes,
  },
  {
    path: "/auth",
    route: authRoutes,
  },
  {
    path: "/schedule",
    route: ScheduleRoutes,
  },
  {
    path: "/doctor-schedule",
    route: doctorScheduleRoutes,
  },
  {
    path: "/specialties",
    route: SpecialtiesRoutes,
  },
  {
    path: "/doctor",
    route: DoctorRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/patient",
    route: PatientRoutes,
  },
  {
    path: "/appointment",
    route: AppointmentRoutes,
  },
  {
    path: "/prescription",
    route: PrescriptionRoutes,
  },
  {
    path: "/review",
    route: ReviewRoutes,
  },
  {
    path: "/metadata",
    route: MetaRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
