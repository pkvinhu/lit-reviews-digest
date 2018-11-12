import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AutoRotatingCarousel } from 'material-auto-rotating-carousel';
import { IconButton, Icon, Button, Typography } from '@material-ui/core';
import CarouselSlide from './CarouselSlide';

class ReviewCarousel extends Component {
  constructor(){
  	super()
  	this.state={
  	  open: false
  	}
  	this.handleOpen=this.handleOpen.bind(this);
  	this.handleClose=this.handleClose.bind(this);
  }

  handleOpen(){
  	this.setState({ open: true })
  }

  handleClose(){
  	this.setState({ open: false })
  }

  render(){
  	const { reviews, title } = this.props;
  	const { open } = this.state;
  	const { handleClose, handleOpen } = this;
  	console.log(reviews)
  	return (
  	<div style={{display: 'flex', 
  	  			   justifyContent: 'center', 
  	  			   padding: '50px 90px 50px 90px'}}>
  	    {reviews.length ? 
  	    	(<div><AutoRotatingCarousel open={open}
							  onClose={handleClose}>
  	      {reviews.map((each, idx) => {
  	      	return (
  	      	  <CarouselSlide key={idx} review={each} title={title}/>
  	      	)
  	      })}
  	    </AutoRotatingCarousel>
		<Button onClick={handleOpen} style={{backgroundColor:"#FF6347"}}>
  	    <Icon>bookmarks</Icon>Click for Reviews</Button></div>) : (<Typography variant="title">There are no reviews!</Typography>)}
  	</div>
  	)
  }
}

const mapStateToProps = ({books}) => {
  const { reviews, title } = books.reviews[0];
  console.log(books.reviews);
  return {
  	reviews,
  	title
  }
}

export default connect(mapStateToProps)(ReviewCarousel)