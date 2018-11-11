import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { IconButton, Icon, Button } from '@material-ui/core'
import BooksGrid from './BooksGrid';
import ReviewsCarousel from './ReviewsCarousel';

class SearchResults extends Component {
  constructor(){
  	super()
  	this.state={
  	  headline: '',
  	  idx: 0,
  	}
  	this.wordSlide = this.wordSlide.bind(this);
  }

  wordSlide(){
  	const {headline, idx} = this.state;
  	const { input } = this.props;
  	const fullHeadline = 'Your search results for "' + input + '":';
	if(idx!== fullHeadline.length){
  	  this.setState({ headline: this.state.headline+fullHeadline[this.state.idx], idx: this.state.idx+1})
  	} 
  }

  componentDidMount(){
  	const { headline, idx } = this.state;
  	const { input } = this.props;
  	const fullHeadline2 = 'Your search results for "' + input + '":';
  	if(idx < fullHeadline2.length){setInterval(()=>{this.wordSlide()},125)}
  }

  render() {
  	const { books, input, history } = this.props;
  	const { headline } = this.state;
  	console.log(input)
  	return (
  	  <div style={{ display: 'flex', 
  	  				justifyContent: 'center',
  	  				flexDirection: 'column', 
  	  				border: '1px solid black'}}>
  	  <div style={{display: 'flex'}}>
  	    <Button component={Link} to='/'><Icon>arrow_back</Icon>Go Back</Button>
  	  </div>
  	    <h2 style={{ fontFamily: 'courier',
  					 padding: '0px 90px 0px 90px'}}>{headline}</h2>
  	    <BooksGrid />
  	    <ReviewsCarousel />
  	  </div>
  	)
  }
}

const mapStateToProps = ({books}, {history}) => ({
	books,
	input: books.input,
	history
})

export default connect(mapStateToProps)(SearchResults);
