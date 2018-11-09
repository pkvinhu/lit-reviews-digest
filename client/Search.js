import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class Search extends Component {

  render(){

  	return (
  	  <div style={{ display: "flex", justifyContent:"center" }}>
  	    <TextField style={{ fontFamily: "courier" }} placeholder="Give it a whirl!"></TextField>
  	  </div>
  	)
  }
}

export default Search;