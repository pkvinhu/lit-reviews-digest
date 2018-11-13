import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import QueryHeadline from './QueryHeadline';
import Search from './Search';
import { Paper } from '@material-ui/core'
import Login from './Login';
import SignUp from './SignUp';
import SearchResults from './SearchResults';
import BooksMap from './BooksMap';
import BookmarkedHistory from './BookmarkedHistory';

class Home extends Component {

  render(){
  	const renderSignUp = ({ history }) => <SignUp history={history} />;
  	const renderLogin = ({ history }) => <Login history={history} />;
  	const renderQueryHeadline = ({ history }) => <QueryHeadline history={history} />;
  	const renderSearchResults = ({ history }) => <SearchResults history={history} />;
  	const renderMap = ({ history}) => <BooksMap history={history} />;
  	return (
  	<Router>
  	  <div style={{ alignItems: 'center' }}>
  	  	<Route path='/' component={Header}/>
  	  	<Route exact path='/' render={renderQueryHeadline} />
  	  	<Route exact path='/history' component={BookmarkedHistory} />  	  	
  	  	<Route exact path='/maps' render={renderMap} />
  	    <Route exact path='/login' render={renderLogin} />
  	  	<Route exact path='/signup' render={renderSignUp} />
  	  	<Route exact path='/search/results' render={renderSearchResults} />
  	    <Footer />
  	  </div>
  	</Router>
  	)
  }
}

export default Home;