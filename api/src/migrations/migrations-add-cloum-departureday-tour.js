'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('TourDepartureDays', 'startPlace', {
			type: Sequelize.STRING,
		});
	},
	async down(queryInterface, Sequelize) {},
};
