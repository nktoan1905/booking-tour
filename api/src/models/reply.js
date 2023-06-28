'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Reply extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Reply.belongsTo(models.User, { foreignKey: 'userId' });
			Reply.belongsTo(models.Comment, { foreignKey: 'commentId' });
		}
	}
	Reply.init(
		{
			commentId: DataTypes.INTEGER,
			userId: DataTypes.INTEGER,
			text: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Reply',
		},
	);
	return Reply;
};
