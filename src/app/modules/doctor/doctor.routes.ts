import express from "express";
import { DoctorController } from "./doctor.controller.js";

const router = express.Router();

router.get("/", DoctorController.getAllFromDB);

export const DoctorRoutes = router;
