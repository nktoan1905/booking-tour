'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Comment extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			Comment.hasMany(models.Reply, { as: 'replyComments', foreignKey: 'commentId' });  
			Comment.belongsTo(models.User, { foreignKey: 'userId' });
			Comment.belongsTo(models.Tour, { foreignKey: 'tourId' });
		}
	}
	Comment.init(
		{
			userId: DataTypes.INTEGER,
			tourId: DataTypes.INTEGER,
			text: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'Comment',
		},
	);
	return Comment;
};
