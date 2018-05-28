const express = require('express');
const app = express();
app.use('', express.static('../public'));
app.use(require('body-parser').json);
app.use('/auth', require('./routers/authorization'));


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017', function(err){
    if(err)
        throw err;
    console.log('Successfully connected to database');
});

const s = require('./db_services/photopost_services');
s.addPhotoPost({
    id: '1',
        descriprion: 'Under the same sky',
        createdAt: new Date('2018-01-01T20:00:00'),
        author: 'Katarina Ventrella',
        photoLink: '.UI/pic1.jpg',
        likes: [' Nomer Odin', ' Castanea Crenata', ' Erein Pak',],
        hashTags: [' #sky', ' #happy']
});

app.listen(3030, () => {
    console.log('Server is running...')
});