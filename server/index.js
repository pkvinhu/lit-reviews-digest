const express = require('express');
const app = express();
const morgan = require('morgan');
//const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const port = 3000;
const db = require('./models')
const path = require('path');
const init = db.init;
const auth = require('./api/auth');
const authRouter = auth.router;
const userRouter = require('./api/user');
const goodReadsRouter = require('./api/goodreads')
const { authenticate } = auth;

//app.use(authenticate);
app.use(morgan('dev')); 
app.use(express.json());
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')))
// app.use('/graphql', graphqlHTTP({
//   schema,
//   graphiql: true
// }));

app.use('/api/auth', [ authenticate, authRouter ]);
app.use('/api/users', userRouter);
app.use('/api/books', goodReadsRouter);

init()
.then(() => app.listen(port || 3000, () => {
  console.log('listening')
}));
