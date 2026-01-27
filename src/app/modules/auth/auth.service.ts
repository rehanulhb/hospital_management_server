import { UserStatus } from "@prisma/client";
import { prisma } from "../../shared/prisma.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import config from "../../../config/index.js";
import { jwtHelper } from "../../helper/jwtHelper.js";
import ApiError from "../../errors/apiError.js";
import httpStatus from "http-status";

const login = async (payload: { email: string; password: string }) => {
  const user = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
      status: UserStatus.ACTIVE,
    },
  });

  const isCorrectPassword = await bcrypt.compare(
    payload.password,
    user.password,
  );
  if (!isCorrectPassword) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Password is incorrect!");
  }

  const accessToken = jwtHelper.generateToken(
    {
      email: user.email,
      role: user.role,
    },
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  const refreshToken = jwtHelper.generateToken(
    {
      email: user.email,
      role: user.role,
    },
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
    needPasswordChange: user.needPasswordChange,
  };
};

export const AuthService = {
  login,
};
