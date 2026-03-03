import { fileUploader } from "../../helper/fileUploader.js";
import { paginationHelper } from "../../helper/paginationHelper.js";
import prisma from "../../shared/prisma.js";
const inserIntoDB = async (req) => {
    const file = req.file;
    if (file) {
        const uploadToCloudinary = await fileUploader.uploadToCloudinary(file);
        req.body.icon = uploadToCloudinary?.secure_url;
    }
    const result = await prisma.specialties.create({
        data: req.body,
    });
    return result;
};
const getAllFromDB = async (options) => {
    const { limit, page, skip } = paginationHelper.calculatePagination(options);
    const result = await prisma.specialties.findMany({
        skip,
        take: limit,
        orderBy: options.sortBy && options.sortOrder
            ? { [options.sortBy]: options.sortOrder }
            : { createdAt: "desc" },
    });
    const total = await prisma.specialties.count();
    return {
        meta: {
            total,
            page,
            limit,
        },
        data: result,
    };
};
const deleteFromDB = async (id) => {
    const result = await prisma.specialties.delete({
        where: {
            id,
        },
    });
    return result;
};
export const SpecialtiesService = {
    inserIntoDB,
    getAllFromDB,
    deleteFromDB,
};
//# sourceMappingURL=specialties.service.js.map