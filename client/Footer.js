import React, { Component } from 'react';
import { Paper, Typography } from '@material-ui/core';

class Footer extends Component {

  render() {

  	return (
  	  <div style={{ height: '70px', position: 'fixed', bottom: '0'}}>
  	    <Typography variant='body1'>Powered by Kevin Hu</Typography>
  	  </div>
  	)
  }
}

export default Footer;