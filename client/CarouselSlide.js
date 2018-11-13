import React, { Component, Fragment } from 'react';
import { Slide } from 'material-auto-rotating-carousel';
import { connect } from 'react-redux';
import { Button, Icon } from '@material-ui/core';
import StarRatingComponent from 'react-star-rating-component';
import { _addToHistory } from './store/history'

class CarouselSlide extends Component {
  constructor(){
  	super()
  	this.handleClick=this.handleClick.bind(this);
  }

  handleClick(){
  	const { review, _addToHistory, user, images } = this.props;
  	_addToHistory({...review, logo: review.logo || images[review.source] || images['No Image']}, user)
  }

  render() {
  	const { review, title, images, user } = this.props;
  	const { handleClick } = this;
  	return (
  	<div>
  	<Slide media={<img src={review.logo || images[review.source] || images['No Image']} style={{height:'300px', width:'300px', color: 'white'}}/>}
  		   style={{ height: 'auto', backgroundColor: 'white' }}
  		   title={<div>
  		   	<div style={{color: 'black'}}>{title}</div>
  		   	{user.email && (<Button onClick={handleClick} style={{backgroundColor:"#FF6347"}}><Icon>bookmark</Icon> Save for later</Button>)}
  		   	<StarRatingComponent starCount={5} value={review.stars}/>
  		   	</div>}
  	       subtitle={<div>
  	       	<body style={{color: 'black'}}>
  	       	<div>Reviewed by {review.source}</div>
  	       	<br/>
  	       	<div>{review.snippet}</div>
  	       	</body>
  	       	<a href={review.link}>Read the full review here.</a>
  	       	<br/><br/><br/><br/><br/>
  	       	</div>}
		   />
	</div>
  	)
  }
}

const mapStateToProps = ({auth, books}, { review, title }) => {
  console.log(auth)
  return {
  	user: auth.user,
    review,
    title,
    images: books.images
  }
}

const mapDispatchToProps = dispatch => ({
  _addToHistory: (review, user) => dispatch(_addToHistory(review, user))
})

export default connect(mapStateToProps, mapDispatchToProps)(CarouselSlide);


