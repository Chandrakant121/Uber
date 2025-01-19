const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect(process.env.DB_CONNECT)
};

module.exports = connect