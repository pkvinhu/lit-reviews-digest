import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Paper, Typography } from '@material-ui/core';
import { _getHistory } from './store/history'

class BookmarkedHistory extends Component {

  componentDidMount(){
  	const { user, _getHistory } = this.props;
  	_getHistory(user);
  }

  render(){
  	const { history, user } = this.props;
  	return (
  	  <div style={{display:'flex', justifyContent: 'center', flexDirection: 'column', padding: '50px'}}>
  	  {history.length ? (<div>
  	  	{history.map(each => {
  	  	return (
  	  	  <Paper style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'25px'}}>
  	  	  <div style={{width:'500px'}}>
  	  	  <img src={each.logo} style={{ height: 'auto', width:'auto'}}/>
  	  	  </div>
  	  	  <div style={{padding: '25px'}}>
  	  	  <Typography variant='title'><strong>Reviewer:</strong>{each.source}</Typography>
  	  	  <Typography variant='body1'><strong>Date written: </strong>{each.date.slice(0,10)}</Typography>
  	  	  <Typography variant='body1'><strong>Short Review:</strong> {each.snippet}</Typography>
  	  	  <Typography variant='body1'>Link to full article <a href={each.link}>here</a></Typography>
  	  	  </div>
  	  	  </Paper>
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