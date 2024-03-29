'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Feedbacks', 'status', {
			type: Sequelize.BOOLEAN,
		});
	},
	async down(queryInterface, Sequelize) {},
};
