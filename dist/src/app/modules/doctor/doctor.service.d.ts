import { type Doctor } from "@prisma/client";
import type { IPaginationOptions } from "../../interfaces/pagination.js";
import type { IDoctorFilterRequest, IDoctorUpdate } from "./doctor.interface.js";
type PatientInput = {
    symptoms: string;
};
export declare const DoctorService: {
    updateIntoDB: (id: string, payload: IDoctorUpdate) => Promise<({
        doctorSpecialties: ({
            specialities: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                title: string;
                icon: string;
            };
        } & {
            createdAt: Date;
            updatedAt: Date;
            doctorId: string;
            specialitiesId: string;
        })[];
    } & {
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
    }) | null>;
    getAllFromDB: (filters: IDoctorFilterRequest, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            review: {
                rating: number;
            }[];
            doctorSchedules: ({
                schedule: {
                    createdAt: Date;
                    id: string;
                    updatedAt: Date;
                    endDateTime: Date;
                    startDateTime: Date;
                };
            } & {
                createdAt: Date;
                updatedAt: Date;
                doctorId: string;
                scheduleId: string;
                appointmentId: string | null;
                isBooked: boolean;
            })[];
            doctorSpecialties: ({
                specialities: {
                    title: string;
                };
            } & {
                createdAt: Date;
                updatedAt: Date;
                doctorId: string;
                specialitiesId: string;
            })[];
        } & {
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
        })[];
    }>;
    getByIdFromDB: (id: string) => Promise<Doctor | null>;
    deleteFromDB: (id: string) => Promise<Doctor>;
    softDelete: (id: string) => Promise<Doctor>;
    getAISuggestion: (input: PatientInput) => Promise<any[]>;
    getAllPublic: (filters: IDoctorFilterRequest, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: {
            createdAt: Date;
            review: {
                createdAt: Date;
                patient: {
                    name: string;
                    profilePhoto: string | null;
                };
                rating: number;
                comment: string;
            }[];
            doctorSpecialties: ({
                specialities: {
                    createdAt: Date;
                    id: string;
                    updatedAt: Date;
                    title: string;
                    icon: string;
                };
            } & {
                createdAt: Date;
                updatedAt: Date;
                doctorId: string;
                specialitiesId: string;
            })[];
            id: string;
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
            averageRating: number;
            updatedAt: Date;
        }[];
    }>;
};
export {};
//# sourceMappingURL=doctor.service.d.ts.map