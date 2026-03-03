import { type Schedule } from "@prisma/client";
import type { IAuthUser } from "../../interfaces/common.js";
import type { IPaginationOptions } from "../../interfaces/pagination.js";
import type { IFilterRequest, ISchedule } from "./schedule.interface.js";
export declare const ScheduleService: {
    inserIntoDB: (payload: ISchedule) => Promise<Schedule[]>;
    getAllFromDB: (filters: IFilterRequest, options: IPaginationOptions, user: IAuthUser) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: {
            createdAt: Date;
            id: string;
            updatedAt: Date;
            endDateTime: Date;
            startDateTime: Date;
        }[];
    }>;
    getByIdFromDB: (id: string) => Promise<Schedule | null>;
    deleteFromDB: (id: string) => Promise<Schedule>;
};
//# sourceMappingURL=schedule.service.d.ts.map