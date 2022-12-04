import Joi from 'joi';

const schema = {
	authSchema: Joi.object({
		email: Joi.string().email().lowercase().required(),
		password: Joi.string().min(6).required(),
	}),
};
export default schema;
