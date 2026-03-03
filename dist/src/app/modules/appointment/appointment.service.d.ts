import { AppointmentStatus, Prisma } from "@prisma/client";
import type { IAuthUser } from "../../interfaces/common.js";
import type { IPaginationOptions } from "../../interfaces/pagination.js";
export declare const AppointmentService: {
    createAppointment: (user: IAuthUser, payload: any) => Promise<{
        paymentUrl: string | null;
    }>;
    getMyAppointment: (user: IAuthUser, filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            limit: number;
            page: number;
        };
        data: ({
            payment: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                status: import("@prisma/client").$Enums.PaymentStatus;
                appointmentId: string;
                amount: number;
                transactionId: string;
                paymentGatewayData: Prisma.JsonValue | null;
                stripeEventId: string | null;
            } | null;
            prescription: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                patientId: string;
                doctorId: string;
                appointmentId: string;
                instructions: string;
                followUpDate: Date | null;
            } | null;
            review: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                patientId: string;
                doctorId: string;
                appointmentId: string;
                rating: number;
                comment: string;
            } | null;
            schedule: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                endDateTime: Date;
                startDateTime: Date;
            };
            doctor: {
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
            videoCallingId: string;
            status: import("@prisma/client").$Enums.AppointmentStatus;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
            patientId: string;
            doctorId: string;
            scheduleId: string;
        })[];
    }>;
    updateAppointmentStatus: (appointmentId: string, status: AppointmentStatus, user: IAuthUser) => Promise<{
        createdAt: Date;
        id: string;
        updatedAt: Date;
        videoCallingId: string;
        status: import("@prisma/client").$Enums.AppointmentStatus;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
        patientId: string;
        doctorId: string;
        scheduleId: string;
    }>;
    getAllFromDB: (filters: any, options: IPaginationOptions) => Promise<{
        meta: {
            total: number;
            page: number;
            limit: number;
        };
        data: ({
            payment: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                status: import("@prisma/client").$Enums.PaymentStatus;
                appointmentId: string;
                amount: number;
                transactionId: string;
                paymentGatewayData: Prisma.JsonValue | null;
                stripeEventId: string | null;
            } | null;
            prescription: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                patientId: string;
                doctorId: string;
                appointmentId: string;
                instructions: string;
                followUpDate: Date | null;
            } | null;
            review: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                patientId: string;
                doctorId: string;
                appointmentId: string;
                rating: number;
                comment: string;
            } | null;
            schedule: {
                createdAt: Date;
                id: string;
                updatedAt: Date;
                endDateTime: Date;
                startDateTime: Date;
            };
            doctor: {
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
            videoCallingId: string;
            status: import("@prisma/client").$Enums.AppointmentStatus;
            paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
            patientId: string;
            doctorId: string;
            scheduleId: string;
        })[];
    }>;
    cancelUnpaidAppointments: () => Promise<void>;
    createAppointmentWithPayLater: (user: IAuthUser, payload: any) => Promise<{
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
        videoCallingId: string;
        status: import("@prisma/client").$Enums.AppointmentStatus;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
        patientId: string;
        doctorId: string;
        scheduleId: string;
    }>;
    initiatePaymentForAppointment: (appointmentId: string, user: IAuthUser) => Promise<{
        paymentUrl: string | null;
    }>;
};
//# sourceMappingURL=appointment.service.d.ts.map