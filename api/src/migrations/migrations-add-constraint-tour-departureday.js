'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addConstraint('TourDepartureDays', {
			fields: ['dayStartId', 'tourId', 'startPlace'],
			type: 'unique',
			name: 'unique_dayStartId_tourId_startPlace',
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.removeConstraint('TourDepartureDays', 'unique_dayStartId_tourId_startPlace');
	},
};
