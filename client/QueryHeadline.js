import React, { Component } from 'React';
import Search from './Search';
import { connect } from 'react-redux';

class QueryHeadline extends Component {
  constructor(){
  	super()
  	this.state = {
  	  headline: '',
  	  fullHeadline: 'Welcome to LitReviews Digest./Have you ever wanted to quickly find book reviews/But do not know where to easily access them?/Look no further!/We are here to curate the reviews for you!/Feel free to type in a book in the search bar.',
  	  idx: 0,
  	  search: true
  	}
  	// this.wordSlide = this.wordSlide.bind(this);
  }

 //  wordSlide(){
 //  	const {headline, fullHeadline, idx} = this.state;
 //  	if(fullHeadline[idx] == '/'){
 //  	  this.setState({ headline: '', idx: this.state.idx+1 })
 //  	}
	// else if(idx!== fullHeadline.length){
 //  	  this.setState({ headline: this.state.headline+this.state.fullHeadline[this.state.idx], idx: this.state.idx+1})
 //  	} 
 //  	else if (idx===fullHeadline.length){
 //  	  this.setState({ search: true })
 //  	}
 //  }

 //  componentDidMount(){
 //  	const { headline, fullHeadline, idx } = this.state;
 //  	const time = fullHeadline[idx] == '/' ? 1000 : 125;
 //  	if(idx < fullHeadline.length){setInterval(()=>{this.wordSlide()},time)}
 //  }

  render(){
  	const { search } = this.state;
  	const { history } = this.props;
  	return (
  	<div>
  	  <div style={{ display: 'flex', justifyContent: 'center', padding: '125px'}}>
  	    <h2 style={{ fontFamily: 'courier'}}>{this.state.headline}</h2>
  	  </div>
  	  {search && <Search history={history}/>}
  	 </div>
  	)
  }
}

const mapStateToProps = (state, {history}) => ({
	history
})

export default connect(mapStateToProps)(QueryHeadline);