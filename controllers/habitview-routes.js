const router = require("express").Router();
const sequelize = require("../config/connection");
const { Habit, Counts, User } = require("../models");
const withAuth = require('../utils/auth');

router.get('/'/*, withAuth*/, (req, res) => {
    console.log('habit view session print');
    console.log(req.session);
  
    console.log(req.session);
})


module.exports = router;