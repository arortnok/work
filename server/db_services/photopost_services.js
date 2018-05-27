const mongoose = require('mongoose');
const PhotoPostSchema = new mongoose.Schema({
    id: {type: String},
    description: {type: String},
    author: {type: String},
    photoLink: {type: String},
    likes: {type: Array},
    hashTags: {type: Array}
});
var photoPosts = [
    {
        id: '1',
        descriprion: 'Under the same sky',
        createdAt: new Date('2018-01-01T20:00:00'),
        author: 'Katarina Ventrella',
        photoLink: '.UI/pic1.jpg',
        likes: [' Nomer Odin', ' Castanea Crenata', ' Erein Pak',],
        hashTags: [' #sky', ' #happy']
    },
    {
        id: '2',
        descriprion: 'Hello',
        createdAt: new Date('2018-01-02T20:00:00'),
        author: 'Dmitry Popugaev',
        photoLink: '.UI/pic2.jpg',
        likes: [' Jack Oblivian', ' Nomer Odin', ' Erein Pak',],
        hashTags: [' #darkness']
    },
    {
        id: '3',
        descriprion: 'Such a great cosplay!',
        createdAt: new Date('2018-01-03T20:00:00'),
        author: 'Erein Pak',
        photoLink: '.UI/pic3.jpg',
        likes: [' Katarina Ventrella', ' Michiro Endo', ' Castanea Crenata', ' Erein Pak'],
        hashTags: [' #cosplay', ' #miyazaki']
    },
    {
        id: '4',
        descriprion: 'I wish I was there...',
        createdAt: new Date('2018-01-04T20:00:00'),
        author: 'Nomer Odin',
        photoLink: '.UI/pic4.jpg',
        likes: [' Dmitry Popugaev', ' Erein Pak'],
        hashTags: [' #dream']
    },
    {
        id: '5',
        descriprion: 'Home is best',
        createdAt: new Date('2018-01-05T20:00:00'),
        author: 'Castanea Crenata',
        photoLink: '.UI/pic5.jpg',
        likes: [' Katarina Ventrella',' Dmitry Popugaev', ' Erein Pak'],
        hashTags: [' #nature', ' #home']
    },
    {
        id: '6',
        descriprion: 'nowplaying David Bowie - Starman',
        createdAt: new Date('2018-01-06T20:00:00'),
        author: 'Katarina Ventrella',
        photoLink: '.UI/pic6.jpg',
        likes: [' Dmitry Popugaev', ' Castanea Crenata', ' Michiro Endo', ' Nomer Odin'],
        hashTags: [' #np']
    },
    {
        id: '7',
        descriprion: 'Field recordings are the best',
        createdAt: new Date('2018-01-07T20:00:00'),
        author: 'Nomer Odin',
        photoLink: '.UI/pic7.jpg',
        likes: [' Dmitry Popugaev'],
        hashTags: [' #fr', ' #music']
    },
    {
        id: '8',
        descriprion: 'Field recordings are the best v.2',
        createdAt: new Date('2018-01-08T20:00:00'),
        author: 'Nomer Odin',
        photoLink: '.UI/pic8.jpg',
        likes: [' Dmitry Popugaev'],
        hashTags: [' #fr', ' #music']
    },
    {
        id: '9',
        descriprion: 'New album coming soon!',
        createdAt: new Date('2018-01-09T20:00:00'),
        author: 'Jack Oblivian',
        photoLink: '.UI/pic9.jpg',
        likes: [' Castanea Crenata', ' Erein Pak', ' Katarina Ventrella'],
        hashTags: [' #JackOblivian', ' #country']
    },
    {
        id: '10',
        descriprion: 'wowowoowowow',
        createdAt: new Date('2018-01-10T20:00:00'),
        author: 'Michiro Endo',
        photoLink: '.UI/pic10.BMP',
        likes: [' Nomer Odin', ' Jack Oblivian'],
        hashTags: [' #wow']
    }
];
const PhotoPost = mongoose.model(photoPosts, PhotoPostSchema);
module.exports= {
    addPhotoPost
};
function addPhotoPost(post){
    return PhotoPost.findOne({id: post.id}).then(photopost=>{
        if(!photopost){
            photopost = new PhotoPost(post);
            return photopost.save();
        }
        })
}
addPhotoPost(post11);
