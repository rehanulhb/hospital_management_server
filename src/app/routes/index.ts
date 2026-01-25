import express from "express";
import { userRoutes } from "../modules/user/user.routes.js";
import { authRoutes } from "../modules/auth/auth.routes.js";
import { ScheduleRoutes } from "../modules/schedule/schedule.routes.js";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
