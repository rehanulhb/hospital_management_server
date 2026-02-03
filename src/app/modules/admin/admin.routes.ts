import express from "express";

import { UserRole } from "@prisma/client";
import auth from "../../middlewares/auth.js";
import { adminValidationSchemas } from "./admin.validations.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { AdminController } from "./admin.controller.js";

const router = express.Router();

router.get("/", auth(UserRole.ADMIN), AdminController.getAllFromDB);

router.get("/:id", auth(UserRole.ADMIN), AdminController.getByIdFromDB);

router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(adminValidationSchemas.update),
  AdminController.updateIntoDB,
);

router.delete("/:id", auth(UserRole.ADMIN), AdminController.deleteFromDB);

router.delete(
  "/soft/:id",
  auth(UserRole.ADMIN),
  AdminController.softDeleteFromDB,
);

export const AdminRoutes = router;
