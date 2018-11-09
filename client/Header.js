import React, { Component } from 'react';
import { Typography, IconButton, Icon, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

  render() {
  	const { token } = this.props;
  	return (
  	  <div style={{ height: '100px', position: 'fixed', top: '0', display:'flex', justifyContent: 'space-between'}}>
  	    <div style={{ display: 'flex', width: '60%' }}>
  	    <img height='70px' width='50px' src='https://i0.wp.com/johnson-library.flywheelsites.com/wp-content/uploads/2014/08/icon_21951.png'/>
  	    <Typography style={{ paddingTop: '5%'}} variant='display2' color="textPrimary">itReviews Digest</Typography>
  	    </div>
  	    <div style={{ position: 'fixed', right: '0', display: 'flex', justifyContent:'row'}}>
			<IconButton component={Link} to='/'><Icon>home</Icon></IconButton>
  	      	{!token && (<Button component={Link} to='/login'>LOGIN</Button>)
  	      }
  	    </div>
  	  </div>
  	)
  }
}

const mapStateToProps = (state) => {
  const token = window.localStorage.getItem('token') ? true : false;
  return {
  	token
  }
}

export default connect(mapStateToProps)(Header);