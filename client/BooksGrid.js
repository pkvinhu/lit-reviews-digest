import React, { Component } from 'react';
import { GridList, GridListTile } from '@material-ui/core';
import { connect } from 'react-redux';
import BookCard from './BookCard';

class BookGrid extends Component {
  render () {
  	const { books, googleImg, nytimesImg, penguinImg } = this.props;
  	// const yesPenguin = books[1][0] && books[1][0].work ? true : false;
  	console.log(books)
  	return (
  	  <div style={{display: 'flex', justifyContent: 'center', padding: '0px 100px 0px 100px'}}>
  	    <GridList cols={2} cellHeight={5} style={{display:'flex', 
  	    						   height: 'auto',
  	    						   width:'100%',
  	    						   flexWrap: 'wrap',
  	    						   overflow: 'hidden',}}>
  	      {books[0].map(each=>{
  	      	return (
  	      	  <GridListTile cols={1} style={{ display: 'flex', height: 'auto'}}>
  	      	  <BookCard img={googleImg} book={each}/>
  	      	  </GridListTile>
  	      	)
  	      })}
  	      {books[2].length && books[2].map((each, idx)=>{
  	      	return (
  	      	  <GridListTile cols={1} style={{ display: 'flex', height: 'auto'}}>
  	      	    <BookCard img={nytimesImg} book={each}/>
  	      	  </GridListTile>
  	      	)
  	      })}
  	      {/*{(yesPenguin && books[1][0].work[0]) && books[1][0].work.map((each, idx)=>{
  	      	return idx=== 0 && (<GridListTile cols={1} style={{ display: 'flex', height: 'auto'}}>
  	      	    <BookCard img={penguinImg} book={each}/>
  	      	  </GridListTile>)
  	      	})}
  	      {(yesPenguin && books[1][0].work.authorweb) && 
  	      	(<GridListTile cols={1} style={{ display: 'flex', height: 'auto'}}>
  	      	    <BookCard img={penguinImg} book={books[1][0].work}/>
  	      	  </GridListTile>)
  	      	})}*/}
  	    </GridList>
  	  </div>
  	)
  }
}

const mapStateToProps = ({ books }, { history }) => {
	const { google, penguin, nytimes } = books;
	const { input } = books;
	// console.log(penguin, penguin[0], penguin[0].work, penguin[0].work.work)
	return {
	  books: [google, penguin, nytimes],
	  input,
	  history,
	  googleImg: `http://kinlane-productions.s3.amazonaws.com/api-evangelist-site/company/logos/Screen%20Shot%202017-03-16%20at%204.28.26%20PM.png`,
	  nytimesImg: `https://www.sjlib.org/wp-content/uploads/2015/01/New-York-Times-logo.jpg`,
	  penguinImg: `https://www.underconsideration.com/brandnew/archives/penguin_random_house_2014_logo.png`,
	}
}

export default connect(mapStateToProps)(BookGrid);