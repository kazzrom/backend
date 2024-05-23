import sharp from "sharp";
import fs from "fs";
import path from "path";
import StudentRepository from "../../repositories/Group/StudentRepository.js";

export default class ImageController {
  static async uploadImage(req, res) {
    const { id } = req.params;
    if (!req.file) {
      res.status(400).json({ message: "No files were uploaded." });
    }

    const student = await StudentRepository.getStudentById(id);

    if (student.image) {
      fs.unlinkSync(path.join("static", student.image));
      fs.unlinkSync(path.join("uploads", student.image.split(".")[1]));
    }

    const partsOriginalName = req.file.originalname.split(".");
    const extension = partsOriginalName[partsOriginalName.length - 1];

    try {
      await sharp(req.file.path).toFile(
        `./static/${req.file.filename}.${extension}`
      );
      await StudentRepository.updateImage({
        id,
        image: `static/${req.file.filename}.${extension}`,
      });

      res.json({ file: `static/${req.file.filename}.${extension}` });
    } catch (error) {
      console.log(error);
      res.status(422).json({ error: error.message });
    }
  }
}
