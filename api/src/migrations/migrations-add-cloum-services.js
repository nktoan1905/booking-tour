'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.addColumn('Services', 'loadhome', {
			type: Sequelize.BOOLEAN,
		});
	},
	async down(queryInterface, Sequelize) {},
};
