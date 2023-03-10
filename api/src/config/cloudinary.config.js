import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});
const storage = new CloudinaryStorage({
	cloudinary,
	allowedFormats: ['jpg', 'png'],
	filename: (req, file, cb) => {
		console.log(file);
		cb(null, file.originalname);
	},
	params: {
		folder: 'tourImage',
	},
});

const uploadCloud = multer({ storage });

export default uploadCloud;
