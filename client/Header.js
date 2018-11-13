import React, { Component } from 'react';
import { Typography, IconButton, Icon, Button, AppBar, Toolbar, Paper } from '@material-ui/core';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { slide as Menu } from 'react-burger-menu';
import { logout } from './store/auth';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
  	const { token, logout } = this.props;
  	return (
	<AppBar color='secondary' style={{ display: 'flex',
  	  				   flexDirection: 'row',
  	  				   height: 'auto', 
  	  				   position: 'static', 
  	  				   justifyContent: 'space-between'}}>
  	    <div style={{ display: 'flex', 
  	    			  width: '60%'}}>
  	    <img height='90px' width='65px' src='https://i0.wp.com/johnson-library.flywheelsites.com/wp-content/uploads/2014/08/icon_21951.png'/>
  	    <Typography style={{ paddingTop: '5%'}} 
  	    			variant='display2' 
  	    			color="textPrimary">itReviews Digest</Typography>
  	    </div>
  	    <div style={{ display: 'flex', 
  	    			  justifyContent:'center',
  	    			  padding: '40px 40px 0px 0px', 
  	    			  flexDirection: 'flex-end'}}>
  	    <Menu right 
  	    	  noOverlay
  	    	  className='bm-menu-wrap'
  	    	  style={{position: 'fixed',
    				  right: '0px',
				      width: '300px',
				      height: '30%'}}
  	    	  customBurgerIcon={ <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEkSURBVEhLtdUhS0NRGMbx1y7KomDUujC1qUkQxK2IxarBb+DCsNlFBa2iFsGmK2YFwTq7STRoE8QN/T+HO9nuPcVz7nngx3jgvfdwdu7ubCBjuMInfgK9YBPeHMN30X91MYuhTOALvgtCXGMoO/ANhuphEn/pwDcYowkXfV++gVhPcDmAb6AMc7AGlhJYRg12iMcEHrAK79ZC7WMK51nXZ2Eohm6uzEP9QkXPbH4w1Bl08/ZAt13cJqBFFmBVrCewhgrsA/mthnrGCd6yfoTCUIz+W7QOdXfI+aEYK1C2oO4W0Lbyg6H0Z3WP76zvwcYxk4AenhHYJd4TeMUGCtuM0cIo9H5TL/2Qp6EsQt0t0D+QMtxAP7C7rJ/CtqFzKBvvIav9AsQawgPzaG6vAAAAAElFTkSuQmCC" /> }>
  	    	<Paper style={{background: 'white',
  	    			  paddingTop: '50px',
  	    			  width: '150px',
	    	  		  height: '33%',
					  boxSizing: 'border-box',
					  margin: '0px'}}>
			<Button component={Link} to='/maps'><Icon>location_on</Icon> BKStore</Button>  	    	
			<Button component={Link} to='/'><Icon>home</Icon> Home</Button>
			{token && <Button component={Link} to='/history'><Icon>history</Icon> History</Button>}
  	      	{!token ? 
  	      		(<Button component={Link} to='/login'><Icon> change_history</Icon> Login</Button>) :
  	      		(<Button onClick={logout} component={Link} to='/login'><Icon> change_history</Icon> Logout</Button>)
  	      }
  	      </Paper>
  	    </Menu>
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

const mapDispatchToProps = dispatch => ({
  logout: ()=> dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);




  	  /**/