import { UserRole, type Admin, type Doctor, type Patient } from "@prisma/client";
import type { Request } from "express";
import type { IAuthUser } from "../../interfaces/common.js";
import type { IPaginationOptions } from "../../interfaces/pagination.js";
export declare const userService: {
    createAdmin: (req: Request) => Promise<Admin>;
    createDoctor: (req: Request) => Promise<Doctor>;
    createPatient: (req: Request) => Promise<Patient>;
    getAllFromDB: (params: any, options: IPaginationOptions) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
        };
        data: {
            createdAt: Date;
            admin: {
                createdAt: Date;
                id: string;
                email: string;
                name: string;
                profilePhoto: string | null;
                contactNumber: string;
                isDeleted: boolean;
                updatedAt: Date;
            } | null;
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
            } | null;
            patient: {
                createdAt: Date;
                id: string;
                email: string;
                name: string;
                profilePhoto: string | null;
                contactNumber: string | null;
                address: string | null;
                isDeleted: boolean;
                updatedAt: Date;
            } | null;
            id: string;
            email: string;
            updatedAt: Date;
            status: import("@prisma/client").$Enums.UserStatus;
            role: import("@prisma/client").$Enums.UserRole;
            needPasswordChange: boolean;
        }[];
    }>;
    changeProfileStatus: (id: string, status: UserRole) => Promise<{
        createdAt: Date;
        id: string;
        email: string;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.UserStatus;
        password: string;
        role: import("@prisma/client").$Enums.UserRole;
        needPasswordChange: boolean;
    }>;
    getMyProfile: (user: IAuthUser) => Promise<{
        id: string;
        email: string;
        status: import("@prisma/client").$Enums.UserStatus;
        role: import("@prisma/client").$Enums.UserRole;
        needPasswordChange: boolean;
    } | {
        id: string;
        email: string;
        status: import("@prisma/client").$Enums.UserStatus;
        role: import("@prisma/client").$Enums.UserRole;
        needPasswordChange: boolean;
    } | {
        createdAt: Date;
        id: string;
        email: string;
        name: string;
        profilePhoto: string | null;
        contactNumber: string;
        isDeleted: boolean;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.UserStatus;
        role: import("@prisma/client").$Enums.UserRole;
        needPasswordChange: boolean;
    } | {
        createdAt: Date;
        patientHealthData: {
            createdAt: Date;
            id: string;
            gender: import("@prisma/client").$Enums.Gender;
            updatedAt: Date;
            patientId: string;
            dateOfBirth: string;
            bloodGroup: import("@prisma/client").$Enums.BloodGroup;
            hasAllergies: boolean | null;
            hasDiabetes: boolean | null;
            height: string;
            weight: string;
            smokingStatus: boolean | null;
            dietaryPreferences: string | null;
            pregnancyStatus: boolean | null;
            mentalHealthHistory: string | null;
            immunizationStatus: string | null;
            hasPastSurgeries: boolean | null;
            recentAnxiety: boolean | null;
            recentDepression: boolean | null;
            maritalStatus: import("@prisma/client").$Enums.MaritalStatus;
        } | null;
        medicalReport: {
            createdAt: Date;
            id: string;
            updatedAt: Date;
            patientId: string;
            reportName: string;
            reportLink: string;
        }[];
        id: string;
        email: string;
        name: string;
        profilePhoto: string | null;
        contactNumber: string | null;
        address: string | null;
        isDeleted: boolean;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.UserStatus;
        role: import("@prisma/client").$Enums.UserRole;
        needPasswordChange: boolean;
    }>;
    updateMyProfie: (user: IAuthUser, req: Request) => Promise<{}>;
};
//# sourceMappingURL=user.service.d.ts.map