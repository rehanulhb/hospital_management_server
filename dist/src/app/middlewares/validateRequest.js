import { ZodObject } from "zod";
const validateRequest = (schema) => async (req, res, next) => {
    try {
        await schema.parseAsync({
            body: req.body,
        });
        return next();
    }
    catch (err) {
        next(err);
    }
};
export default validateRequest;
//# sourceMappingURL=validateRequest.js.map