'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Promotions', 'forObject', {
			type: Sequelize.INTEGER,
		});
	},
	async down(queryInterface, Sequelize) {},
};
