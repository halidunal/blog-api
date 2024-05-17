const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const rootDir = path.dirname(require.main.filename);
    fs.mkdirSync(path.join(rootDir, "/public/uploads/images"), {
      recursive: true,
    });
    cb(null, path.join(rootDir, "/public/uploads/images"));
  },
  filename: (req, file, cb) => {
    const extension = file.mimetype.split("/")[1];

    if (!req.savedImages) req.savedImages = [];

    const uniqueSuffix = `${Date.now()}_${Math.round(Math.random() * 1e9)}`;

    let url = `image_${uniqueSuffix}.${extension}`;

    req.savedImages = [...req.savedImages, path.join(url)];

    cb(null, url);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedMimeTypes = [
    "images/jpg",
    "image/gif",
    "image/jpeg",
    "image/png",
  ];

  if (!allowedMimeTypes.includes(file.mimetype)) {
    cb(new Error("This file type is not supported"), false);
  }
  cb(null, true);
};

const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 2 * 1024 * 1024 },
}).array("images", 1);

module.exports = upload;
