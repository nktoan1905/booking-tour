import express from 'express';
import fileUploader from "../config/cloudinary.config"

const router = express.Router();

router.post('/cloudinary-upload', fileUploader.single('file'), (req, res, next) => {
	if (!req.file) {
		next(new Error('No file uploaded!'));
		return;
	}
	console.log(req.file)

	res.json({ secure_url: req.file.path });
});



export default router;
