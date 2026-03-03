import multer from "multer";
declare function uploadToCloudinary(file: Express.Multer.File): Promise<import("cloudinary").UploadApiResponse>;
export declare const fileUploader: {
    upload: multer.Multer;
    uploadToCloudinary: typeof uploadToCloudinary;
};
export {};
//# sourceMappingURL=fileUploader.d.ts.map