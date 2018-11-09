import React, { Component } from 'react';
import { Typography } from '@material-ui/core';

class Header extends Component {

  render() {

  	return (
  	  <div style={{ height: '100px', position: 'fixed', top: '0', display:'flex'}}>
  	    <div style={{ display: 'flex', width: '60%' }}>
  	    <img height='70px' width='50px' src='https://i0.wp.com/johnson-library.flywheelsites.com/wp-content/uploads/2014/08/icon_21951.png'/>
  	    <Typography style={{paddingTop: '5%'}} variant='display2' color="primary">itReviews Digest</Typography>
  	    </div>
  	  </div>
  	)
  }
}

export default Header;