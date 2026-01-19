import express, {
  type NextFunction,
  type Request,
  type Response,
} from "express";
import { UserController } from "./user.controller.js";
import { fileUploaded } from "../../helper/fileUploader.js";
import { UserValidation } from "./user.validation.js";

const router = express.Router();

router.post(
  "/create-patient",
  fileUploaded.upload.single("file"),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = UserValidation.createPatientValidationSchema.parse(
      JSON.parse(req.body.data),
    );
    return UserController.createPatient(req, res, next);
  },
);

export const userRoutes = router;
