import React, { Component } from 'react';
import { TextField, IconButton, Icon } from '@material-ui/core';
import { _getBooksWithReviews,
		 _getBooksGoogle,
		 _getBooksNYTimes,
		 _getBooksPenguin,
		 changeInput } from './store/books.js';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';

class Search extends Component {
  constructor(){
  	super()
  	this.state={
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
  	const { value } = e.target;
  	const { input, changeInput } = this.props;
  	changeInput(value);
  }

  handleClick(){
  	const { getAllBooks, history, input } = this.props;
  	const { load } = this;
  	load()
  	getAllBooks(input)
  	setTimeout(()=>{history.push('/search/results')}, 4000)
  }
  render(){
  	const { loading } = this.state;
  	const { input } = this.props;
  	const { handleChange, handleClick } = this;
  	return (
  	  <div style={{ display: "flex", 
  	  				justifyContent:"center", 
  	  				flexDirection: 'column',
  	  				padding: '30%', paddingTop: '0px' }}>
  	  	{loading ? 
  	  		(<ReactLoading type="cylon" color="black" height={150} width={100} />) :
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
  const { input } = books;
  return {
  	input,
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
  changeInput: (input) => dispatch(changeInput(input)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);