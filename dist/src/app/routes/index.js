import express from "express";
import { apiLimiter } from "../middlewares/rateLimiter.js";
import { AdminRoutes } from "../modules/admin/admin.routes.js";
import { AppointmentRoutes } from "../modules/appointment/appointment.routes.js";
import { AuthRoutes } from "../modules/auth/auth.routes.js";
import { DoctorRoutes } from "../modules/doctor/doctor.routes.js";
import { DoctorScheduleRoutes } from "../modules/doctorSchedule/doctorSchedule.routes.js";
import { MetaRoutes } from "../modules/meta/meta.routes.js";
import { PatientRoutes } from "../modules/patient/patient.routes.js";
import { PaymentRoutes } from "../modules/payment/payment.route.js";
import { PrescriptionRoutes } from "../modules/prescription/prescription.route.js";
import { ReviewRoutes } from "../modules/review/review.routes.js";
import { ScheduleRoutes } from "../modules/schedule/schedule.routes.js";
import { SpecialtiesRoutes } from "../modules/specialties/specialties.routes.js";
import { userRoutes } from "../modules/user/user.routes.js";
const router = express.Router();
router.use(apiLimiter); // Apply to all routes
const moduleRoutes = [
    {
        path: "/user",
        route: userRoutes,
    },
    {
        path: "/admin",
        route: AdminRoutes,
    },
    {
        path: "/auth",
        route: AuthRoutes,
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
        path: "/patient",
        route: PatientRoutes,
    },
    {
        path: "/schedule",
        route: ScheduleRoutes,
    },
    {
        path: "/doctor-schedule",
        route: DoctorScheduleRoutes,
    },
    {
        path: "/appointment",
        route: AppointmentRoutes,
    },
    {
        path: "/payment",
        route: PaymentRoutes,
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
        path: "/meta",
        route: MetaRoutes,
    },
];
moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
//# sourceMappingURL=index.js.map