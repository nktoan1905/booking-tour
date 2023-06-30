'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Transactions', 'status', {
			type: Sequelize.INTEGER,
		});
	},
	async down(queryInterface, Sequelize) {},
};
