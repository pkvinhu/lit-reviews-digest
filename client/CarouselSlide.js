import React, { Component, Fragment } from 'react';
import { Slide } from 'material-auto-rotating-carousel';
import { connect } from 'react-redux';
import { Card, CardContent, CardMedia } from '@material-ui/core';
import StarRatingComponent from 'react-star-rating-component';

class CarouselSlide extends Component {

  render() {
  	const { review, title } = this.props;
  	const images = {
  	  'NY Times': 'https://www.logolynx.com/images/logolynx/2d/2d92bf6113e642f0244f482f9d109912.jpeg',
  	  'Guardian': 'https://digitalhealth.london/wp-content/uploads/2017/01/The-Guardian-Logo-Font.jpg',
  	  'WSJ online': 'https://aclion.com/wp-content/uploads/2018/04/WSJ-Logo.png',
  	  'NPR': 'http://i.imgur.com/KiyaZwN.png',
  	  'Financial Times': 'https://eig.org/wp-content/uploads/2016/04/Financial-Times-Logo.jpg',
  	  'Blog Critics': 'http://www.edwardeinhorn.com/Images/logo_blogcritics_ENG.png',
  	  'Book Reporter': 'https://www.bookreporter.com/sites/default/files/bookreporter_fb.jpg',
  	  'The Telegraph': 'https://d302e0npexowb4.cloudfront.net/wp-content/uploads/2016/11/The_Telegraph_logo.jpg',
  	  'Kirkus': 'http://www.mordraud.com/wp-content/uploads/2015/10/kirkus_banner.jpg',
  	  'Impressions In Ink': 'https://s3-media3.fl.yelpcdn.com/bphoto/BruclttJnnD0DduMrOIJqQ/l.jpg',
  	  'The Millions': 'https://i.pinimg.com/originals/b4/c6/a9/b4c6a9b85a421ccd3b161ddb775a5a52.jpg',
  	  'No Image': 'https://imgix.bustle.com/lovelace/uploads/892/96a005a0-0adc-0133-45a5-0a2ca390b447.png?w=646&fit=max&auto=format&q=70'
  	}
  	console.log(review);
  	return (
  	<Slide media={<img src={review.logo || images[review.source] || images['No Image']} style={{height:'300px', width:'300px', color: 'white'}}/>}
  		   style={{ height: 'auto', backgroundColor: 'white' }}
  		   title={<div><div style={{color: 'black'}}>{title}</div><br/><StarRatingComponent starCount={5} value={review.stars}/></div>}
  	       subtitle={<div><body style={{color: 'black'}}><div>Reviewed by {review.source}</div><br/><div>{review.snippet}</div></body><a href={review.link}>Read the full review here.</a><br/><br/><br/><br/><br/></div>}
		   />
  	)
  }
}

const mapStateToProps = (state, { review, title }) => ({
  review,
  title
})

export default connect(mapStateToProps)(CarouselSlide);