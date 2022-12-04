import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('travel_development', 'root', '123456789', {
	host: 'localhost',
	dialect: 'mysql',
	logging: false,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
});

let connectDB = async () => {
	try {
		await sequelize.authenticate();
		console.log('Connection has been established successfully.');
	} catch (error) {
		console.error('Unable to connect to the database:', error);
	}
};
export default connectDB;
