import express from "express";
import { UserRole } from "@prisma/client";
import { AdminController } from "./admin.controller.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { adminValidationSchemas } from "./admin.validations.js";
import auth from "../../middlewares/auth.js";
const router = express.Router();
router.get("/", auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), AdminController.getAllFromDB);
router.get("/:id", auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), AdminController.getByIdFromDB);
router.patch("/:id", auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), validateRequest(adminValidationSchemas.update), AdminController.updateIntoDB);
router.delete("/:id", auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), AdminController.deleteFromDB);
router.delete("/soft/:id", auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), AdminController.softDeleteFromDB);
export const AdminRoutes = router;
//# sourceMappingURL=admin.routes.js.map