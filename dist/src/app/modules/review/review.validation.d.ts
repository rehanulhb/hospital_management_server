import { z } from "zod";
export declare const ReviewValidation: {
    create: z.ZodObject<{
        body: z.ZodObject<{
            appointmentId: z.ZodString;
            rating: z.ZodNumber;
            comment: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=review.validation.d.ts.map