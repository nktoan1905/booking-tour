import express from 'express';
import { auth } from '../middlewares/verifyToken';
let router = express.Router();

router.get('/', auth, (req, res) => {
	res.json({
		posts: {
			title: 'Hello',
			description:
				"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five cen",
		},
	});
});

module.exports = router;
