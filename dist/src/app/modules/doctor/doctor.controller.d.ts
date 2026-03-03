import type { Request, Response } from "express";
export declare const DoctorController: {
    updateIntoDB: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllFromDB: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getByIdFromDB: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteFromDB: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    softDelete: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAiSuggestion: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=doctor.controller.d.ts.map