import { type Prescription } from "@prisma/client";
import type { IAuthUser } from "../../interfaces/common.js";
import type { IPaginationOptions } from "../../interfaces/pagination.js";
export declare const PrescriptionService: {
    insertIntoDB: (user: IAuthUser, payload: Partial<Prescription>) => Promise<{
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
        };
    } & {
        createdAt: Date;
        id: string;
        updatedAt: Date;
        patientId: string;
        doctorId: string;
        appointmentId: string;
        instructions: string;
        followUpDate: Date | null;
    }>;
    patientPrescription: (user: IAuthUser, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            appointment: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                videoCallingId: string;
                status: import("@prisma/client").$Enums.AppointmentStatus;
                paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
                patientId: string;
                doctorId: string;
                scheduleId: string;
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
            };
        } & {
            createdAt: Date;
            id: string;
            updatedAt: Date;
            patientId: string;
            doctorId: string;
            appointmentId: string;
            instructions: string;
            followUpDate: Date | null;
        })[];
    }>;
    getAllFromDB: (filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            appointment: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                videoCallingId: string;
                status: import("@prisma/client").$Enums.AppointmentStatus;
                paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
                patientId: string;
                doctorId: string;
                scheduleId: string;
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
            };
        } & {
            createdAt: Date;
            id: string;
            updatedAt: Date;
            patientId: string;
            doctorId: string;
            appointmentId: string;
            instructions: string;
            followUpDate: Date | null;
        })[];
    }>;
};
//# sourceMappingURL=prescription.service.d.ts.map