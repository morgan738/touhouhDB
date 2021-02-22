const Sequelize = require('sequelize')
const db = require('../db')

const Character = db.define('character', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  imageURL: {
    type: Sequelize.TEXT
  },
  description: {
    type: Sequelize.TEXT
  }
  //Appearance?
})

module.exports = Character
