const express = require('express');
const router = express.Router();
const { parseString } = require('xml2js');
const request = require('request');
module.exports = router;

router.get('/search/?', (req, res, next) => {
  console.log('hi', req.query)
  request.get(`https://www.goodreads.com/search.xml?key=4QU9COieMvf4X2x9Hi6I5A&q=book`)
  .on('response', (response) => {
  	console.log(response.data)
  	res.send(parseString(response.books))
  	// console.log(parsed);
  	// res.json(parsed);
  })

})