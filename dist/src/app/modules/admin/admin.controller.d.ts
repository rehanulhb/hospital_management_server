import type { NextFunction, Request, RequestHandler, Response } from "express";
export declare const AdminController: {
    getAllFromDB: RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getByIdFromDB: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateIntoDB: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    deleteFromDB: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    softDeleteFromDB: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=admin.controller.d.ts.map