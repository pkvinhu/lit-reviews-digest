import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import QueryHeadline from './QueryHeadline';
import Search from './Search';
import { Paper } from '@material-ui/core'
import Login from './Login';
import SignUp from './SignUp';

class Home extends Component {

  render(){
  	const renderSignUp = ({ history }) => <SignUp history={history} />;
  	const renderLogin = ({ history }) => <Login history={history} />;
  	console.log(window.localStorage)
  	return (
  	<Router>
  	  <div style={{ alignItems: 'center' }}>
  	  	<Route path='/' component={Header}/>
  	  	<Route exact path='/' component={QueryHeadline} />
  	    <Route exact path='/login' render={renderLogin} />
  	  	<Route exact path='/signup' render={renderSignUp} />
  	    <Footer />
  	  </div>
  	</Router>
  	)
  }
}

export default Home;