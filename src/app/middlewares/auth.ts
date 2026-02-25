import httpStatus from "http-status";

import ApiError from "../errors/apiError.js";
import { jwtHelpers } from "../helper/jwtHelper.js";
import config from "../../config/index.js";
import type { Secret } from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";

const auth = (...roles: string[]) => {
  return async (
    req: Request & { user?: any },
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const token = req.headers.authorization || req.cookies.accessToken;
      console.log({ token }, "from auth guard");

      if (!token) {
        throw new ApiError(httpStatus.UNAUTHORIZED, "You are not authorized!");
      }

      const verifiedUser = jwtHelpers.verifyToken(
        token,
        config.jwt_access_secret as Secret,
      );

      req.user = verifiedUser;

      if (roles.length && !roles.includes(verifiedUser.role)) {
        throw new ApiError(httpStatus.FORBIDDEN, "Forbidden!");
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;
