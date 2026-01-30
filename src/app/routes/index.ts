import express from "express";
import { userRoutes } from "../modules/user/user.routes.js";
import { authRoutes } from "../modules/auth/auth.routes.js";
import { ScheduleRoutes } from "../modules/schedule/schedule.routes.js";
import { doctorScheduleRoutes } from "../modules/doctorSchedule/doctorSchedule.routes.js";
import { SpecialtiesRoutes } from "../modules/specialties/specialties.routes.js";
import { DoctorRoutes } from "../modules/doctor/doctor.routes.js";

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
    path: "/doctor",
    route: DoctorRoutes,
  },
  {
    path: "/doctor-schedule",
    route: doctorScheduleRoutes,
  },
  {
    path: "/specialties",
    route: SpecialtiesRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
