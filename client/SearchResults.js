import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  	const {books, input} = this.props;
  	const { headline } = this.state;
  	console.log(input)
  	return (
  	  <div style={{ paddingTop: '45%' }}>
  	    <h2 style={{ fontFamily: 'courier'}}>{headline}</h2>
  	  </div>
  	)
  }
}

const mapStateToProps = ({books}, {history}) => ({
	books,
	input: books.input,
})

export default connect(mapStateToProps)(SearchResults);
