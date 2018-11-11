import React, { Component } from 'react';
import { connect } from 'react-redux';
import BannerAnim from 'rc-banner-anim';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';

class ReviewCarousel extends Component {

  render(){
  	const { reviews } = this.props;
  	console.log(reviews)
  	return (
  	  <div>
  	    <BannerAnim type="custom">
  	      <Element></Element>
  	      <QueueAnim></QueueAnim>
  	    </BannerAnim>
  	  </div>
  	)
  }
}

const mapStateToProps = ({books}) => {
  const { reviews } = books;
  return {
  	reviews
  }
}

export default connect(mapStateToProps)(ReviewCarousel)