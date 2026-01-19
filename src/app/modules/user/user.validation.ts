import z from "zod";

const createPatientValidationSchema = z.object({
  password: z.string(),
  patient: {
    name: z.string({
      error: "Name is Required",
    }),
    email: z.string({
      error: "Email is Required",
    }),
    address: z.string().optional(),
  },
});

export const UserValidation = {
  createPatientValidationSchema,
};
