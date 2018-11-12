import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent, Typography } from '@material-ui/core';
import { _getHistory } from './store/history'

class BookmarkedHistory extends Component {

  componentDidMount(){
  	const { user, _getHistory } = this.props;
  	_getHistory(user);
  }

  render(){
  	const { history, user } = this.props;
  	return (
  	  <div>
  	  {history.length ? (<div>
  	  	{history.map(each => {
  	  	return (
  	  	  <Card>
  	  	  <CardContent>{each.snippet}</CardContent>
  	  	  </Card>
  	  	)
  	  })}
  	  </div>) : 
  	  (<Typography>You do not have anything bookmarked!</Typography>)
  	}
  	  </div>
  	)
  }
}

const mapStateToProps = ({ history, auth }) => ({
  history,
  user: auth.user
})

const mapDispatchToProps = dispatch => ({
  _getHistory: user => dispatch(_getHistory(user)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkedHistory);