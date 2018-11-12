const conn = require('./conn');
const User = require('./User');
const History = require('./History');

User.hasMany(History);
History.belongsTo(User);

const init = () => conn.sync();

module.exports = { User, History, init };