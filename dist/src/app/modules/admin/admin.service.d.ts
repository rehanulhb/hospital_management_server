import { type Admin } from "@prisma/client";
import type { IPaginationOptions } from "../../interfaces/pagination.js";
import type { IAdminFilterRequest } from "./admin.interface.js";
export declare const AdminService: {
    getAllFromDB: (params: IAdminFilterRequest, options: IPaginationOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: {
            createdAt: Date;
            id: string;
            email: string;
            name: string;
            profilePhoto: string | null;
            contactNumber: string;
            isDeleted: boolean;
            updatedAt: Date;
        }[];
    }>;
    getByIdFromDB: (id: string) => Promise<Admin | null>;
    updateIntoDB: (id: string, data: Partial<Admin>) => Promise<Admin>;
    deleteFromDB: (id: string) => Promise<Admin | null>;
    softDeleteFromDB: (id: string) => Promise<Admin | null>;
};
//# sourceMappingURL=admin.service.d.ts.map