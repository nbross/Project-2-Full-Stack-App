const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Menu, User, Recipe } = require('../../models');
const withAuth = require('../../utils/auth');

module.exports = router;