'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('News', 'status', {
			type: Sequelize.BOOLEAN,
		});
		await queryInterface.addColumn('News', 'categoryId', {
			type: Sequelize.INTEGER,
		});
	},
	async down(queryInterface, Sequelize) {},
};
