const conn = require('./conn');
const User = require('./User');
const History = require('./History');

User.hasMany(History);
History.belongsTo(User);

const init = () => conn.sync()  //.then(()=> User.create({email:'pkvinhu@gmail.com', password: 'kevin', name: 'kevinhu'}))

module.exports = { User, History, init };