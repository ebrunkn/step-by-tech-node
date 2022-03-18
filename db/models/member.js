const { Sequelize, DataTypes, Model } = require('sequelize')
const sequelize = require('../dbconnection')

class Member extends Model { }

Member.init({
  firstname: DataTypes.STRING,
  lastname: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Member',
  tableName: 'members',
  underscored: true,
  timestamps: true,
});

module.exports = Member