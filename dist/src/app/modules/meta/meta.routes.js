import express from "express";
import { UserRole } from "@prisma/client";
import { MetaController } from "./meta.controller.js";
import auth from "../../middlewares/auth.js";
const router = express.Router();
router.get("/", auth(UserRole.SUPER_ADMIN, UserRole.ADMIN, UserRole.DOCTOR, UserRole.PATIENT), MetaController.fetchDashboardMetaData);
export const MetaRoutes = router;
//# sourceMappingURL=meta.routes.js.map