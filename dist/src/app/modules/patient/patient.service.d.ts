import { type Patient } from "@prisma/client";
import type { IPaginationOptions } from "../../interfaces/pagination.js";
import type { IPatientFilterRequest, IPatientUpdate } from "./patient.interface.js";
export declare const PatientService: {
    getAllFromDB: (filters: IPatientFilterRequest, options: IPaginationOptions, includeHealthData?: boolean) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
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
        } & {
            createdAt: Date;
            id: string;
            email: string;
            name: string;
            profilePhoto: string | null;
            contactNumber: string | null;
            address: string | null;
            isDeleted: boolean;
            updatedAt: Date;
        })[];
    }>;
    getByIdFromDB: (id: string) => Promise<Patient | null>;
    updateIntoDB: (id: string, payload: Partial<IPatientUpdate>) => Promise<Patient | null>;
    deleteFromDB: (id: string) => Promise<Patient | null>;
    softDelete: (id: string) => Promise<Patient | null>;
};
//# sourceMappingURL=patient.service.d.ts.map