const { User } = require('../models');

const userdata = [
  {
    id: 1,
    username: 'Trey',
    email: 'trey@trey.com',
    password: 'trey123'
  },
  {
    id: 2, 
    username: 'Tanya',
    email: 'tanya@tanya.com',
    password: 'tanya123'
  },
  {
    id: 3,
    username: 'Jacob',
    email: 'jacob@jacob.com',
    password: 'jacob123'
  },
  {
    id: 4,
    username: 'Nick',
    email: 'nick@nick.com',
    password: 'nick123'
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;