import express from "express";
import { UserRole } from "@prisma/client";
import { PrescriptionController } from "./prescription.controller.js";
import auth from "../../middlewares/auth.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { PrescriptionValidation } from "./prescription.validation.js";
const router = express.Router();
router.get("/", auth(UserRole.SUPER_ADMIN, UserRole.ADMIN), PrescriptionController.getAllFromDB);
router.get("/my-prescription", auth(UserRole.PATIENT), PrescriptionController.patientPrescription);
router.post("/", auth(UserRole.DOCTOR), validateRequest(PrescriptionValidation.create), PrescriptionController.insertIntoDB);
export const PrescriptionRoutes = router;
//# sourceMappingURL=prescription.route.js.map