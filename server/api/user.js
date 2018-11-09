const express = require('express');
const router = express.Router();
const { User } = require('../models')
module.exports = router;

//all users
router.get('/', (req, res, next) => {
  User.findAll({ include: [Order, Review]})
    .then(users => {
      res.send(users);
    })
    .catch(next);
});

//add user
router.post('/', (req, res, next) => {
  User.create(req.body)
    .then(user => res.json(user))
    .catch(next);
});