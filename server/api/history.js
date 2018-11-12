const express = require('express');
const router = express.Router();
const { User, History } = require('../models');
module.exports = router;

//create a history instance, associate with a user
router.post('/:userId', async (req, res, next) => {
  try{
  	console.log(req.body)
  	const { date, link, snippet, source, logo, stars} = req.body;
    const user = await User.findById(req.params.userId);
    const reviewRecord = await History.create({date, link, snippet, source, logo, stars, userId: user.id})
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