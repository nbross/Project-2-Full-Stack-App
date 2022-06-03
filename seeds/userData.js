const { User } = require('../models');

const userdata = [
  {
    username: 'Trey',
    email: 'trey@trey.com',
    password: 'trey123'
  },
  {
    username: 'Tanya',
    email: 'tanya@tanya.com',
    password: 'tanya123'
  },
  {
    username: 'Jacob',
    email: 'jacob@jacob.com',
    password: 'jacob123'
  },
  {
    username: 'Nick',
    email: 'nick@nick.com',
    password: 'nick123'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;