const mongoose = require('mongoose');
const PhotoPostSchema = new mongoose.Schema({
    id: {type: String},
    description: {type: String},
    author: {type: String},
    photoLink: {type: String},
    likes: {type: Array},
    hashTags: {type: Array}
});
const PhotoPost = mongoose.model('photopost', PhotoPostSchema);
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