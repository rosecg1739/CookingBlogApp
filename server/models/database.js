const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://chelsea:chelsea789@cluster5.3uklmgy.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log('Connected')
});

// Models
require('./Category');
require('./recipe');
