import React, { Component } from 'react';
import { TextField, IconButton, Icon } from '@material-ui/core';
import { _getBooks } from './store/books.js';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(){
  	super()
  	this.state={
  	  input: ''
  	}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
  	const { name, value } = e.target;
  	this.setState({ [name]: value })
  }

  handleClick(){
  	const { input } = this.state;
  	const { _getBooks, books } = this.props;
  	_getBooks(input)
  	.then(books => console.log(books))
  	//.then(() => history.push('/login'))
  }
  render(){
  	const { input } = this.state;
  	const { handleChange, handleClick } = this;
  	return (
  	  <div style={{ display: "flex", 
  	  				justifyContent:"center", 
  	  				flexDirection: 'column' }}>
  	    <TextField placeholder="Give it a whirl!"
  	    		   name="input"
	          		value={input}
	          		onChange={handleChange}
	          		variant="outlined"></TextField>
	        <div style={{ display: 'flex', 
	        	 justifyContent: 'flex-end' }}><IconButton onClick={handleClick}>
              <Icon>search_icon</Icon>
            </IconButton></div>
  	  </div>
  	)
  }
}

const mapStateToProps = ({books}, {history}) => {

  return {
  	books
  }
}

const mapDispatchToProps = (dispatch) => ({
  _getBooks: input => dispatch(_getBooks(input))
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);