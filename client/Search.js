import React, { Component } from 'react';
import { TextField, IconButton, Icon } from '@material-ui/core';
import { _getBooksWithReviews,
		 _getBooksGoogle,
		 _getBooksNYTimes,
		 _getBooksPenguin } from './store/books.js';
import { connect } from 'react-redux';
import { Loader } from 'react-loaders';

class Search extends Component {
  constructor(){
  	super()
  	this.state={
  	  input: '',
  	  loading: false
  	}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.load = this.load.bind(this);
  }

  load(){
  	this.setState({ loading: !this.state.loading})
  }

  handleChange(e){
  	const { name, value } = e.target;
  	this.setState({ [name]: value })
  }

  handleClick(e){
  	e.preventDefault();
  	const { input } = this.state;
  	const { getAllBooks, books, history } = this.props;
  	const { load } = this;
  	load()
  	getAllBooks(input)
  	setTimeout(()=>{history.push('/search/results')}, 4000)
  }
  render(){
  	const { input, loading } = this.state;
  	const { handleChange, handleClick } = this;
  	return (
  	  <div style={{ display: "flex", 
  	  				justifyContent:"center", 
  	  				flexDirection: 'column',
  	  				padding: '30%', paddingTop: '0px' }}>
  	  	{loading ? 
  	  		(<Loader type="pacman" color="yellow" style={{height:'150px', width:'100px'}} active />) :
  	    (<div><TextField placeholder="Give it a whirl!"
  	    		   name="input"
	          		value={input}
	          		onChange={handleChange}
	          		variant="outlined"></TextField>
	        <div style={{ display: 'flex', 
	        	 justifyContent: 'flex-end' }}><IconButton onClick={handleClick}>
              <Icon>search_icon</Icon>
            </IconButton></div></div>)}
  	  </div>
  	)
  }
}

const mapStateToProps = ({books}, {history}) => {

  return {
  	books,
  	history
  }
}

const mapDispatchToProps = (dispatch) => ({
  getAllBooks: (input) => {
  	dispatch(_getBooksWithReviews(input));
  	dispatch(_getBooksGoogle(input));
  	dispatch(_getBooksNYTimes(input));
  	dispatch(_getBooksPenguin(input));
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);