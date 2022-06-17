const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database')

const User = sequelize.define('Users', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  email:{
    type: DataTypes.STRING
  }
}, {
  // Other model options go here
});

module.exports=User;