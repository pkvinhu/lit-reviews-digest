import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchResults extends Component {
  
  render() {
  	const {books} = this.props;
  	console.log(books);
  	return (
  	  <div style={{ paddingTop: '45%' }}>
  	    <h1>These are the results!</h1>
  	  </div>
  	)
  }
}

const mapStateToProps = ({books}, {history}) => ({
	books
})

export default connect(mapStateToProps)(SearchResults);
