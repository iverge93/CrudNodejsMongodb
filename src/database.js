const mongoose = require('mongoose');

const {HOST, DATABASE} = process.env;
const MONGODB_URI = `mongodb://${HOST}/${DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is  connected'))
    .catch(err => console.log(err));