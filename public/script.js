const photoPosts = [
    {
        id: '1',
        descriprion: 'Under the same sky',
        createdAt: new Date('2018-01-01T20:00:00'),
        author: 'Katarina Ventrella',
        photoLink: 'pic1.jpg',
        likes: ['Nomer Odin', 'Castanea Crenata', 'Erein Pak',],
        hashTags: ['sky', 'happy']
    },
    {
        id: '2',
        descriprion: 'Hello',
        createdAt: new Date('2018-01-02T20:00:00'),
        author: 'Dmitry Popugaev',
        photoLink: 'pic2.jpg',
        likes: ['Jack Oblivian', 'Nomer Odin', 'Erein Pak',],
        hashTags: ['darkness']
    },
    {
        id: '3',
        descriprion: 'Such a great cosplay!',
        createdAt: new Date('2018-01-03T20:00:00'),
        author: 'Erein Pak',
        photoLink: 'pic3.jpg',
        likes: ['Katarina Ventrella', 'Michiro Endo', 'Castanea Crenata', 'Erein Pak'],
        hashTags: ['cosplay', 'miyazaki']
    },
    {
        id: '4',
        descriprion: 'I wish I was there...',
        createdAt: new Date('2018-01-04T20:00:00'),
        author: 'Nomer Odin',
        photoLink: 'pic4.jpg',
        likes: ['Dmitry Popugaev', 'Erein Pak'],
        hashTags: ['dream']
    },
    {
        id: '5',
        descriprion: 'Home is best',
        createdAt: new Date('2018-01-05T20:00:00'),
        author: 'Castanea Crenata',
        photoLink: 'pic5.jpg',
        likes: ['Katarina Ventrella','Dmitry Popugaev', 'Erein Pak'],
        hashTags: ['nature', 'home']
    },
    {
        id: '6',
        descriprion: 'nowplaying David Bowie - Starman',
        createdAt: new Date('2018-01-06T20:00:00'),
        author: 'Katarina Ventrella',
        photoLink: 'pic6.jpg',
        likes: ['Dmitry Popugaev', 'Castanea Crenata', 'Michiro Endo', 'Nomer Odin'],
        hashTags: ['np']
    },
    {
        id: '7',
        descriprion: 'Field recordings are the best',
        createdAt: new Date('2018-01-07T20:00:00'),
        author: 'Nomer Odin',
        photoLink: 'pic7.jpg',
        likes: ['Dmitry Popugaev'],
        hashTags: ['fr', 'music']
    },
    {
        id: '8',
        descriprion: 'Field recordings are the best v.2',
        createdAt: new Date('2018-01-08T20:00:00'),
        author: 'Nomer Odin',
        photoLink: 'pic8.jpg',
        likes: ['Dmitry Popugaev'],
        hashTags: ['fr', 'music']
    },
    {
        id: '9',
        descriprion: 'New album coming soon!',
        createdAt: new Date('2018-01-09T20:00:00'),
        author: 'Jack Oblivian',
        photoLink: 'pic9.jpg',
        likes: ['Castanea Crenata', 'Erein Pak', 'Katarina Ventrella'],
        hashTags: ['JackOblivian', 'country']
    },
    {
        id: '10',
        descriprion: 'wowowoowowow',
        createdAt: new Date('2018-01-10T20:00:00'),
        author: 'Michiro Endo',
        photoLink: 'pic10.jpg',
        likes: ['Nomer Odin', 'Jack Oblivian'],
        hashTags: ['wow']
    }
];

var func = (function() {
        return {
            sortByDate: function (photoPosts) {
                photoPosts.sort(function (a, b) {
                    return b.createdAt - a.createdAt;
                });
            },

            getPhotoPost: function (id) {
                /*photoPosts.forEach(function (item, i, photoPosts){
                    if(validatePhotoPost(item) && item.id == id){
                        //console.log(item.id + '   ' + item.author);
                        return photoPosts[i];
                    }
                    return null;
                });*/
                for (var i = 0; i < photoPosts.length; i++) {
                    if (photoPosts[i].id == id) {
                        return photoPosts[i];
                    }
                }
                return false;
            },

            validatePhotoPost: function (photoPost) {
                if (
                    photoPost.id != null &&
                    photoPost.descriprion != null &&
                    photoPost.createdAt != null &&
                    photoPost.author != null &&
                    photoPost.photoLink != null)
                    return true;
                return false;
            },

            addPhotoPost: function (photoPost) {
                return (validatePhotoPost(photoPost)) &&
                    photoPosts.push(photoPost);
            },
            editPhotoPost: function (id, photoPost) {
                var newPhotoPost = getPhotoPost(id);
                if (validatePhotoPost(photoPost)) {
                    newPhotoPost.descriprion = photoPost.descriprion;
                    newPhotoPost.photoLink = photoPost.photoLink;
                    if (photoPost.likes != null) {
                        newPhotoPost.likes = photoPost.likes;
                    }
                    if (photoPost.hashTags != null) {
                        newPhotoPost.hashTags = photoPost.hashTags;
                    }
                    return newPhotoPost;
                }
                return null;
            },

            removePhotoPost: function (id) {
                var photoPost = getPhotoPost(id);
                if (photoPost == null)
                    return false;
                photoPosts.splice(photoPosts.indexOf(photoPost), 1);
                return true;
            },

            getPhotoPosts: function (skip = 0, top = 10, filterConfig) {
                if (filterConfig === undefined || arguments.length < 3 || filterConfig === {}) {
                    return photoPosts.slice(skip, skip + top);
                }
                else {
                    if (typeof filterConfig !== 'object') {
                        console.log('Error in getPhotoPosts');
                        return;
                    }
                    var res = photoPosts;
                    if (filterConfig.author) {
                        res = res.filter(post => post.author === filterConfig.author);
                    }
                    if (filterConfig.createdAt) {
                        res = res.filter(elem =>
                            post.createdAt.getFullYear() === filterConfig.createdAt.getFullYear() &&
                            post.createdAt.getMonth() === filterConfig.createdAt.getMonth() &&
                            post.createdAt.getDate() === filterConfig.createdAt.getDate()
                    );
                    }
                    if (filterConfig.hashtags) {
                        res = res.filter(post => {
                            return filterConfig.hashtags.every((tag) => {
                                return post.hashtags.includes(tag);
                    }) ;
                    });
                    }
                    return res.slice(skip, skip + top);
                }
                return sortByDate(photoPosts);
            }
        }
    }
)();


