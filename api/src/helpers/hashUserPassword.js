import bcrypt from 'bcrypt';

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
	return new Promise(async (res, rej) => {
		try {
			var hashPassword = await bcrypt.hashSync(password, salt);
			res(hashPassword);
		} catch (e) {
			rej(e);
		}
	});
};
let comparePassword = (loginPassword, userPassword) => {
	return new Promise(async (res, rej) => {
		try {
			let validPass = await bcrypt.compare(loginPassword, userPassword);
			res(validPass);
		} catch (e) {
			rej(e);
		}
	});
};

module.exports = {
	hashUserPassword: hashUserPassword,
    comparePassword: comparePassword
};
