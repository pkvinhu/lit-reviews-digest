const express = require('express');
const router = express.Router();
const { User } = require('../models');
module.exports = router;

//create a history instance, associate with a user
router.post('/:userId', async (req, res, next) => {
  try{
    const user = await User.findById(req.params.id);
    const reviewRecord = await History.create({...req.body, userId: user.id})
    res.send(reviewRecord);
  }
  catch(er) {next(er)}
})

//get all reviews bookmarked by user
router.get('/:userId', (req, res, next) => {
  History.findAll({ where: { userId: req.params.userId }})
  .then(record => res.send(record))
  .catch(next);
})

//destroy specific bookmark
router.delete('/:id', (req, res, next) => {
  History.destroy({ where: { id: req.params.id } })
  .then(() => res.sendStatus(404))
  .catch(next)
})