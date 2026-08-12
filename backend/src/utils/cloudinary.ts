import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getPublicIdFromUrl = (url: string): string | null => {
  try {
    const pathname = new URL(url).pathname;

    const uploadIndex = pathname.indexOf("/upload/");
    if (uploadIndex === -1) return null;

    let publicId = pathname.substring(uploadIndex + 8);

    publicId = publicId.replace(/^v\d+\//, "");

    publicId = publicId.replace(/\.[^/.]+$/, "");

    return publicId;
  } catch {
    return null;
  }
};

const uploadOnCloudinary = async (
  localFilePath: string
) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
      folder: "swynk",
    });

    fs.unlinkSync(localFilePath);

    return response;
  } catch (error) {
    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

const deleteOnCloudinary = async (
  public_id: string,
  resource_type: "image" | "video" | "raw" = "image"
) => {
  try {
    if (!public_id) return null;

    const result = await cloudinary.uploader.destroy(public_id, {
      resource_type,
    });

    return result;
  } catch (error) {
    return error;
  }
};

export {
    getPublicIdFromUrl,
  uploadOnCloudinary,
  deleteOnCloudinary,
};