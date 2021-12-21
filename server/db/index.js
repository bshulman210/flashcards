//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Card = require('./models/Cards');

//associations could go here!
User.hasMany(Card);
Card.belongsTo(User);

module.exports = {
  db,
  models: {
    User,
    Card,
  },
};
