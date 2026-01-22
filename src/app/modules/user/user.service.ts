import bcrypt from "bcryptjs";
import { prisma } from "../../shared/prisma.js";
import type { Request } from "express";
import { fileUploaded } from "../../helper/fileUploader.js";
import { paginationHelper } from "../../helper/paginationHelper.js";
import type { Prisma } from "@prisma/client";
import { userSearchableFields } from "./user.constant.js";

const createPatient = async (req: Request) => {
  if (req.file) {
    const uploadResult = await fileUploaded.uploadToCloudinary(req.file);
    req.body.patient.profilePhoto = uploadResult?.secure_url;
  }
  const hashPassword = await bcrypt.hash(req.body.password, 10);

  const result = await prisma.$transaction(async (tnx) => {
    await tnx.user.create({
      data: {
        email: req.body.patient.email,
        password: hashPassword,
      },
    });

    return await tnx.patient.create({
      data: req.body.patient,
    });
  });
  return result;
};

const getAllFromDB = async (params: any, options: any) => {
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const adnConditions: Prisma.UserWhereInput[] = [];

  if (searchTerm) {
    adnConditions.push({
      OR: userSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    adnConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  console.log(adnConditions);

  const result = prisma.user.findMany({
    skip,
    take: limit,

    where: {
      AND: adnConditions,
    },
    orderBy: {
      [sortBy]: sortOrder,
    },
  });
  return result;
};

export const UserService = {
  createPatient,
  getAllFromDB,
};
