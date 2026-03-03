import type { Specialties } from "@prisma/client";
import type { Request } from "express";
import type { IPaginationOptions } from "../../interfaces/pagination.js";
export declare const SpecialtiesService: {
    inserIntoDB: (req: Request) => Promise<{
        createdAt: Date;
        id: string;
        updatedAt: Date;
        title: string;
        icon: string;
    }>;
    getAllFromDB: (options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: {
            createdAt: Date;
            id: string;
            updatedAt: Date;
            title: string;
            icon: string;
        }[];
    }>;
    deleteFromDB: (id: string) => Promise<Specialties>;
};
//# sourceMappingURL=specialties.service.d.ts.map