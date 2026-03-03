import { Prisma } from "@prisma/client";
import type { IDoctorScheduleFilterRequest } from "./doctorSchedule.interface.js";
import type { IPaginationOptions } from "../../interfaces/pagination.js";
import type { IAuthUser } from "../../interfaces/common.js";
export declare const DoctorScheduleService: {
    insertIntoDB: (user: any, payload: {
        scheduleIds: string[];
    }) => Promise<Prisma.BatchPayload>;
    getMySchedule: (filters: any, options: IPaginationOptions, user: IAuthUser) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: {
            createdAt: Date;
            updatedAt: Date;
            doctorId: string;
            scheduleId: string;
            appointmentId: string | null;
            isBooked: boolean;
        }[];
    }>;
    deleteFromDB: (user: IAuthUser, scheduleId: string) => Promise<{
        createdAt: Date;
        updatedAt: Date;
        doctorId: string;
        scheduleId: string;
        appointmentId: string | null;
        isBooked: boolean;
    }>;
    getAllFromDB: (filters: IDoctorScheduleFilterRequest, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            schedule: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                endDateTime: Date;
                startDateTime: Date;
            };
            doctor: {
                createdAt: Date;
                id: string;
                email: string;
                name: string;
                profilePhoto: string | null;
                contactNumber: string;
                address: string | null;
                registrationNumber: string;
                experience: number;
                gender: import("@prisma/client").$Enums.Gender;
                appointmentFee: number;
                qualification: string;
                currentWorkingPlace: string;
                designation: string;
                isDeleted: boolean;
                averageRating: number;
                updatedAt: Date;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            doctorId: string;
            scheduleId: string;
            appointmentId: string | null;
            isBooked: boolean;
        })[];
    }>;
};
//# sourceMappingURL=doctorSchedule.service.d.ts.map