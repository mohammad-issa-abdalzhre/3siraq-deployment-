import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as multer from 'multer';

export const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/publi/uploads/'); // Specify the directory where files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const prindStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/publi/prind/'); // Specify the directory where 'prind' files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const client = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/publi/client/'); // Specify the directory where 'prind' files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

export const project= multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './src/publi/project/'); // Specify the directory where 'prind' files will be stored
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
