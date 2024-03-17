import { diskStorage } from "multer";

export const prindStorage  = diskStorage({
    destination: (req, file, cb) => {
      cb(null, './src/publi/prind/'); // Specify the directory where files will be stored
    },
    filename: (req, file, cb) => {
      //const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      cb(null,file.originalname);
    },
  });