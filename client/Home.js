import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import QueryHeadline from './QueryHeadline';
import Search from './Search';

class Home extends Component {

  render(){

  	return (
  	  <div style={{ alignItems: 'center' }}>
  	  	<Header />
  	  	<QueryHeadline />
  	  	<Router>
  	  	<Route path='/search' component={Search} />
  	  	</Router>
  	    <Footer />
  	  </div>
  	)
  }
}

export default Home;