const { User } = require('../models');

const userdata = [
  {
    username: 'Trey',
    email: 'trey@trey.com',
    password: 'trey123'
  }
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;