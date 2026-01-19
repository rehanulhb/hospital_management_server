import bcrypt from "bcryptjs";
import type { createPatientInput } from "./user.interface.js";
import { prisma } from "../../shared/prisma.js";
import type { Request } from "express";
import { fileUploaded } from "../../helper/fileUploader.js";

const createPatient = async (req: Request) => {
  if (req.file) {
    const uploadResult = await fileUploaded.uploadToCloudinary(req.file);
    console.log(uploadResult);
  }
  // const hashPassword = await bcrypt.hash(req.body.password, 10);

  // //   const result = await prisma.$transaction(async (tnx) => {});
  // const result = await prisma.$transaction(async (tnx) => {
  //   await tnx.user.create({
  //     data: {
  //       email: req.body.email,
  //       password: hashPassword,
  //     },
  //   });

  //   return await tnx.patient.create({
  //     data: {
  //       name: req.body.name,
  //       email: req.body.email,
  //     },
  //   });
  // });
  // return result;
};

export const UserService = {
  createPatient,
};
