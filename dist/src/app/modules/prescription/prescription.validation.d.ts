import { z } from "zod";
export declare const PrescriptionValidation: {
    create: z.ZodObject<{
        body: z.ZodObject<{
            appointmentId: z.ZodString;
            instructions: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=prescription.validation.d.ts.map