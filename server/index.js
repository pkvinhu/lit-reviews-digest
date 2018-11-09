const express = require('express');
const app = express();
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const port = 3000;
const db = require('./models')
const path = require('path');
const init = db.init;

app.use(express.json());
app.use(express.static(path.join(process.cwd(), 'public')))
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

init()
.then(() => app.listen(port || 3000, () => {
  console.log('listening')
}));
