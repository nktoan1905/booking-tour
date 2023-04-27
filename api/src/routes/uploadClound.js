import express from 'express';
import uploadCloud from '../config/cloudinary.config';

const router = express.Router();

router.post('/cloudinary-upload', uploadCloud.single('file'), (req, res, next) => {
	if (!req.file) {
		next(new Error('No file uploaded!'));
		return;
	}

	res.json({ secure_url: req.file.path });
});



export default router;
