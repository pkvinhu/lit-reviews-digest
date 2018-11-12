import React, { Component } from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';
import { TextField, Button } from '@material-ui/core';
import { _getLocation } from './store/map'

const AnyReactComponent = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
  </div>
);

class BooksMap extends Component {
  constructor(){
  	super()
  	this.state={ searchInput: ''}
  	this.handleClick = this.handleClick.bind(this);
  	this.handleChange=this.handleChange.bind(this);
  }
  
  handleChange(e){
  	const { name, value } = e.target;
  	this.setState({ [name]: value })
  }

  handleClick(){
  	const { searchInput } = this.state;
  	_getLocation(searchInput);
  }

  render(){
  const { handleClick, handleChange } = this;
  const { lat, lng } = this.props;
  const { searchInput } = this.state;
  console.log(lat, lng);
  	return (
		<div style={{ height: '70vh', width: '70%', padding: '100px 0px 200px 125px' }}>
		<div style={{display:'flex'}}><TextField name="searchInput"
				   label="Search a Bookstore"
	          	   value={searchInput}
	               onChange={handleChange}
	               margin="normal"
	               variant="outlined"></TextField>
	    <Button onClick={handleClick}>Search</Button></div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyByU4bW7h9R5-RGODV_2E5EN1hCkca-DeM' }}
          defaultCenter={{lat: 40.7048321, lng: -74.0089692}}
          defaultZoom={16}
        >
          <AnyReactComponent
            lat={lat}
            lng={lng}
            text={'Fullstack Academy'}
          />
        </GoogleMapReact>
      </div>
  	)
  }
}

const mapStateToProps = ({ map }, { history }) => {
  const { lat, lng } = map;
  return {
    lat,
	lng
  }
}

const mapDispatchToProps = (dispatch) => ({
  _getLocation: (search) => dispatch(_getLocation(search))
})

export default connect(mapStateToProps, mapDispatchToProps)(BooksMap);