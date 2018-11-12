import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardContent } from '@material-ui/core';
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
  	  {history.length ? history.map(each => {
  	  	return (
  	  	  <Card>
  	  	  <CardContent>{each.title}</CardContent>
  	  	  </Card>
  	  	)
  	  })}
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