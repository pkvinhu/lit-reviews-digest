const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const { User } = require('../models');

const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return next();
  }

  let id;
  try {
    id = jwt.decode(token, secret).id;
    console.log('this is the ', id);
    User.findById(id)
      .then(user => {
        req.user = user;
        next();
      })
      .catch(next);
  } catch (ex) {
    next({ status: 401 });
  }
}

router.post('/', (req, res, next) => {
  User.findOne({ 
    where: {
      email: req.body.email, 
      password: req.body.password
    } 
  })
  .then( user => {
    if (!user) {
      return next({ status: 401 })
    }
    const token = jwt.sign({ id: user.id }, 
    						process.env.JWT_SECRET)
    console.log(token);
    res.send({ token })
  })
  .catch(next)
})

router.get('/', (req, res, next)=> {
  if (!req.user){
    // console.log('no user')
    return next({ status: 401 })
  }
  res.status(200).send(req.user);
})

module.exports = { authenticate, router };

