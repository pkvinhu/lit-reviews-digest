import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { TextField, Button, FormGroup } from '@material-ui/core'
import { _createUser } from './store/user';

class SignUp extends Component {
  constructor(){
  	super()
  	this.state={
  	  name: '',
  	  email: '',
  	  password: '',
  	}
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
  	const { name, value } = e.target;
  	this.setState({ [name]: value })
  }

  handleClick(){
  	const { name, email, password } = this.state;
  	const { _createUser, history } = this.props;
  	_createUser({name, email, password})
  	.then(() => history.push('/login'))
  }

  render() {
  	const { handleChange, handleClick } = this;
  	const { name, email, password } = this.state;
  	return (
  	  <div style={{ display: 'flex', 
                    justifyContent: 'center', 
                    marginTop: '150px',
                    padding: '35px'}}>
      <div className="loginBox">
          <FormGroup>
  	  	  	<TextField
	          id="outlined-name"
	          name="name"
	          label="name"
	          value={name}
	          onChange={handleChange}
	          margin="normal"
	          variant="outlined"
	        />
	         <TextField
	          id="outlined-name"
	          name="email"
	          label="email"
	          value={email}
	          onChange={handleChange}
	          margin="normal"
	          variant="outlined"
	        />
	        <TextField
            id="standard-password-input"
	          name="password"
	          label="password"
	          value={password}
            required={true}
	          onChange={handleChange}
	          margin="normal"
	          variant="outlined"
	        />
  	  	<div><Button onClick={handleClick}>Sign Up</Button></div>
        </FormGroup>
  	  	</div>
  	  </div>
  	)
  }
}

const mapStateToProps = ({ user }, { history }) => ({
  user,
  history
})

const mapDispatchToProps = dispatch => ({
  _createUser: userInfo => dispatch(_createUser(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)