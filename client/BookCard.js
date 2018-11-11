import React, { Component } from 'react';
import { Card, 
		 CardHeader, 
		 CardMedia, 
		 CardContent, 
		 CardActions,
		 Typography,
		 Collapse,
		 IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { connect } from 'react-redux';

class BookCard extends Component {
  constructor(){
  	super()
  	this.state={ expanded: false }
  	this.handleExpandClick = this.handleExpandClick.bind(this);
  }

  handleExpandClick(){
  	this.setState({ expanded: !this.state.expanded })
  }

  render(){
  	const { book, img } = this.props;
  	const { expanded } = this.state;
  	const { handleExpandClick } = this;
  	console.log('Book: ', book, ' Image: ', img);
  	return (
  	  <Card className={{maxWidth: 400}}>
  	    <img src={img} style={{width: '150px', height:'auto'}}/>
  	    <img src={book.link || book.imgLink || null} style={{alignSelf: 'center', width: '100%', height:'300px'}}/>
  	    <CardContent><Typography variant="title">{book.title}</Typography></CardContent>
  	    <CardContent><Typography >Author: {book.authors || book.author || book.authorweb}</Typography></CardContent>
  	    {book.purchase && <CardContent><Typography ><a href="{book.purchase}">Purchase here</a></Typography></CardContent>}
  	    <IconButton onClick={handleExpandClick}
  	    			aria-expanded={expanded}
            		aria-label="Show more">
  	      <ExpandMoreIcon />
  	    </IconButton>
  	    <Collapse in={expanded} timeout="auto" unmountOnExit>
  	    <CardContent><Typography variant="body1">{book.summary || book.description || book.rgcopy}</Typography></CardContent>
  	    </Collapse>
  	  </Card>
  	)
  }
}

const mapStateToProps = (state, {book, img}) => ({
	book,
	img
})

export default connect(mapStateToProps)(BookCard);