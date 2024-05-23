import { Router } from "express";
import multer from "multer";
import ImageController from "../../controllers/Profile/ImageController.js";

const ImageRouter = Router();

const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];

  if (!allowedTypes.includes(file.mimetype)) {
    const error = new Error("File type not allowed");
    error.code = "LIMIT_FILE_TYPES";
    return cb(error, false);
  }

  cb(null, true);
};

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const upload = multer({
  dest: "./uploads/",
  fileFilter,
  limits: { fileSize: MAX_FILE_SIZE },
});

ImageRouter.post(
  "/upload/:id",
  upload.single("file"),
  ImageController.uploadImage
);

ImageRouter.use((err, req, res, next) => {
  if (err.code === "LIMIT_FILE_TYPES") {
    res.status(422).json({ error: "Разрешены только изображения" });
    return;
  }

  if (err.code === "LIMIT_FILE_SIZE") {
    res.status(422).json({
      error: `Размер изображения не должен превышать ${
        MAX_FILE_SIZE / 1024 / 1024
      } МБ`,
    });
    return;
  }
});

export default ImageRouter;
