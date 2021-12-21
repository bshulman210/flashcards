const Sequelize = require('sequelize');
const db = require('../db');

const Cards = db.define('cards', {
  name: {
    type: Sequelize.STRING,
    allowNull: true,
    defaultValue: 'Untitled',
  },
  word: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  definition: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Cards;
