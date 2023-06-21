'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Tours', 'endPlace', {
			type: Sequelize.STRING,
		});
	},
	async down(queryInterface, Sequelize) {},
};
