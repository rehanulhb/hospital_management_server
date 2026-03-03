export declare const AuthServices: {
    loginUser: (payload: {
        email: string;
        password: string;
    }) => Promise<{
        accessToken: string;
        refreshToken: string;
        needPasswordChange: boolean;
    }>;
    refreshToken: (token: string) => Promise<{
        accessToken: string;
        refreshToken: string;
        needPasswordChange: boolean;
    }>;
    changePassword: (user: any, payload: any) => Promise<{
        message: string;
    }>;
    forgotPassword: (payload: {
        email: string;
    }) => Promise<void>;
    resetPassword: (token: string | null, payload: {
        email?: string;
        password: string;
    }, user?: {
        email: string;
    }) => Promise<void>;
    getMe: (user: any) => Promise<{
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
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map