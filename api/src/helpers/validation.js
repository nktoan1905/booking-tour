import Joi from 'joi';

const registerValidation = (data) => {
	const schema = Joi.object({
		fullName: Joi.string().max(30).required(),
		email: Joi.string().max(30).required().email(),
		password: Joi.string().min(7).required(),
	});
	return schema.validate(data);
};
const loginValidation = (data) => {
	console.log(data);
	const schema = Joi.object({
		email: Joi.string().max(30).required().email(),
		password: Joi.string().min(7).required(),
	});
	return schema.validate(data);
};

module.exports = {
	registerValidation: registerValidation,
	loginValidation: loginValidation,
};
