const router = require('express').Router();
const posts = require('../db_services/photopost_services');

router.get('/getPhotoPosts', (req, res) =>{
    posts.addPhotoPost(req.body.post);
});
router.put('/editPhotoPost', (req, res) => {

});
router.delete('/deletePhotoPost', (req, res) =>{

});
module.exports = router;