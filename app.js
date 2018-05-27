const express = require('express');
const app = express();
app.use('', express.static('public'));
app.use(require('body-parser').json);
app.use('/auth', require('./routers/authorization'));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', function(err){
    if(err)
        throw err;
    console.log('Successfully connected to database');
});
const host = 3000;
app.listen(host, () => {
    console.log('Server is running...')
});