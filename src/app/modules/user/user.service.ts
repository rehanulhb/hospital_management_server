import bcrypt from "bcryptjs";
import { prisma } from "../../shared/prisma.js";
import type { Request } from "express";
import { fileUploaded } from "../../helper/fileUploader.js";

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

const getAllFromDB = async ({
  page,
  limit,
  searchTerm,
  sortBy,
  sortOrder,
  role,
  status,
}: {
  page: number;
  limit: number;
  searchTerm?: any;
  sortBy: any;
  sortOrder: any;
  role: any;
  status: any;
}) => {
  const pageNumber = page || 1;
  const limitNumber = limit || 10;
  const skip = (pageNumber - 1) * limitNumber;
  const result = prisma.user.findMany({
    skip,
    take: limitNumber,

    where: {
      email: {
        contains: searchTerm,
        mode: "insensitive",
      },
      role: role,
      status: status,
    },
    orderBy:
      sortBy && sortOrder
        ? {
            [sortBy]: sortOrder,
          }
        : {
            createdAt: "asc",
          },
  });
  return result;
};

export const UserService = {
  createPatient,
  getAllFromDB,
};
