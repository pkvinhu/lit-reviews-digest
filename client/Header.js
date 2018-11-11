import React, { Component } from 'react';
import { Typography, IconButton, Icon, Button, AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

  render() {
  	const { token } = this.props;
  	return (
  	  <AppBar style={{ display: 'flex',
  	  				   flexDirection: 'row',
  	  				   height: '100px', 
  	  				   position: 'static', 
  	  				   justifyContent: 'space-between'}}>
  	    <div style={{ display: 'flex', 
  	    			  width: '60%',
  	    			  border: '1px solid black' }}>
  	    <img height='90px' width='65px' src='https://i0.wp.com/johnson-library.flywheelsites.com/wp-content/uploads/2014/08/icon_21951.png'/>
  	    <Typography style={{ paddingTop: '5%'}} variant='display2' color="textPrimary">itReviews Digest</Typography>
  	    </div>
  	    <div style={{ display: 'flex', 
  	    			  justifyContent:'row', 
  	    			  flexDirection: 'flex-end',
  	    			  border: '1px solid black'}}>
			<Button component={Link} to='/maps'><Icon>location_on</Icon>BKStore</Button>  	    	
			<Button component={Link} to='/'><Icon>home</Icon>Home</Button>
			<Button component={Link} to='/history'><Icon>history</Icon>History</Button>
  	      	{!token && (<Button component={Link} to='/login'>LOGIN</Button>)
  	      }
  	    </div>
  	  </AppBar>
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