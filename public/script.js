window.func = (function () {
  return {
    photoPosts: [
      {
        id: '1',
        descriprion: 'Under the same sky',
        createdAt: new Date('2018-01-01T20:00:00'),
        author: 'Katarina Ventrella',
        photoLink: '.UI/pic1.jpg',
        likes: [' Nomer Odin', ' Castanea Crenata', ' Erein Pak'],
        hashTags: [' #sky', ' #happy']
      },
      {
        id: '2',
        descriprion: 'Hello',
        createdAt: new Date('2018-01-02T20:00:00'),
        author: 'Dmitry Popugaev',
        photoLink: '.UI/pic2.jpg',
        likes: [' Jack Oblivian', ' Nomer Odin', ' Erein Pak'],
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
        likes: [' Katarina Ventrella', ' Dmitry Popugaev', ' Erein Pak'],
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
    ],
    sortByDate: function (photoPosts) {
      photoPosts.sort(function (a, b) {
        return b.createdAt - a.createdAt
      })
    },

    getPhotoPost: function (id) {
      if (id > 0) {
        let i = window.func.photoPosts.findIndex(elem => elem.id === id)
        return window.func.photoPosts[i]
      }
      return false
    },

    validatePhotoPost: function (photoPost) {
      if (
        photoPost.id != null &&
                    photoPost.descriprion != null &&
                    photoPost.createdAt != null &&
                    photoPost.author != null &&
                    photoPost.photoLink != null) { return true }
      return false
    },

    addPhotoPost: function (photoPost) {
      return (window.func.validatePhotoPost(photoPost)) &&
          window.func.photoPosts.push(photoPost)
    },
    editPhotoPost: function (id, photoPost) {
      if (this.validatePhotoPost(photoPost)) {
        let i = window.func.photoPosts.findIndex(elem => elem.id === id)
        if (photoPost.description) {
          window.func.photoPosts[i].descriprion = photoPost.description
        }
        if (photoPost.description) {
          window.func.photoPosts[i].photoLink = photoPost.photoLink
        }
        if (photoPost.description) {
          window.func.photoPosts[i].hashTags = photoPost.hashTags
        }
        return true
      }
      return false
    },

    removePhotoPost: function (id) {
      let i = window.func.photoPosts.findIndex(elem => elem.id === id)
      if (i < 0) { return false }
      window.func.photoPosts.splice(window.func.photoPosts[i], 1)
      return true
    },

    getPhotoPosts: function (skip = 0, top = 10, filterConfig) {
      if (!filterConfig || filterConfig === undefined || arguments.length < 3 || filterConfig === {}) {
        return window.func.photoPosts.slice(skip, skip + top)
      } else {
        if (typeof filterConfig !== 'object') {
          console.log('Error in getPhotoPosts')
          return
        }
        var res = window.func.photoPosts
        if (filterConfig.author) {
          res = res.filter(post => post.author === filterConfig.author)
        }
        if (filterConfig.createdAt) {
          res = res.filter(elem =>
            elem.createdAt.getFullYear() === filterConfig.createdAt.getFullYear() &&
                            elem.createdAt.getMonth() === filterConfig.createdAt.getMonth() &&
                            elem.createdAt.getDate() === filterConfig.createdAt.getDate()
          )
        }
        if (filterConfig.hashtags) {
          res = res.filter(post => {
            return filterConfig.hashtags.every((tag) => {
              return post.hashtags.includes(tag)
            })
          })
        }
        return res.slice(skip, skip + top)
      }
      // return window.func.sortByDate(window.func.photoPosts)
    }
  }
}
)()
