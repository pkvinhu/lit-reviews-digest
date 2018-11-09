
const graphql = require('graphql');
const _ = require('lodash');
const { GraphQLObjectType, 
		GraphQLString,
		GraphQLSchema,
		GraphQLID,
		GraphQLInt,
		GraphQLList,
		GraphQLNonNull } = graphql;
const { books, authors } = require('../seed');
const { Book, Author } = require('../models');

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
  	id: { type: GraphQLID },
  	name: { type: GraphQLString },
  	genre: { type: GraphQLString },
  	author: {
  	  type: AuthorType,
  	  resolve(parent, args){
  	  	return Author.findById(parent.authorId)
  	  }
  	}
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
  	id: { type: GraphQLID },
  	name: { type: GraphQLString },
  	age: { type: GraphQLInt },
  	books: {
  	  type: new GraphQLList(BookType),
  	  resolve(parent, args){
  	  	const { id, name, genre } = parent;
  	  	return Book.findAll({where:{id, name, genre}})
  	  }
  	}
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
  	book: {
  	  type: BookType,
  	  args: { id: { type: GraphQLID } },
  	  resolve(parent, args){
  	  	//code to get data from db/source
  	  	return Book.findById(args.id)
  	  }
  	},
  	author: {
  	  type: AuthorType,
  	  args: { id: { type: GraphQLID } },
  	  resolve(parent, args){
  	  	return Author.findById(args.id)
  	  }
  	},
  	books: {
  	  type: new GraphQLList(BookType),
  	  resolve(parent, args){
  	  	return books;
  	  }
  	},
  	authors: {
  	  type: new GraphQLList(AuthorType),
  	  resolve(parent, args){
  	  	return authors;
  	  }
  	}
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
  	addAuthor: {
  	  type: AuthorType,
  	  args: {
  	  	name: { type: GraphQLString },
  	  	age: { type: GraphQLInt },
  	  },
  	  resolve(parent, args){
  	    return Author.create({
  	  	  name: args.name,
  	  	  age: args.age
  	    })
  	  }
  	},
  	addBook: {
  		type: BookType,
  		args: {
  		  name: { type: new GraphQLNonNull(GraphQLString) },
  		  genre: { type: GraphQLString },
  		  authorId: { type: GraphQLID }
  		},
  		resolve(parent, args){
  		  return Book.create({
  		  	name: args.name,
  		  	genre: args.genre,
  		  	authorId: args.authorId
  		  })
  		}
  	},
  	addAuthor: {
  	    type: AuthorType,
  		args: {
  		  name: { type: new GraphQLNonNull(GraphQLString) },
  		  age: { type: GraphQLInt }
  		},
  		resolve(parent, args){
  		  return Book.create({
  		  	name: args.name,
  		  	age: args.age
  		  })
  		}
  	},
  	updateBook: {
  	  type: BookType,
  		args: {
  		  name: { type: GraphQLString },
  		  genre: { type: GraphQLString },
  		  authorId: { type: new GraphQLNonNull(GraphQLID) }
  		},
  		async resolve (parent, args){
  			const { name, genre } = args;
  			console.log(name, genre)
  			const book = await Book.findById(args.authorId);
  			const updated = await book.update({ name, genre })
  			return updated;
  		}
  	}
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});