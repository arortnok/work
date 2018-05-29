let post11 = {
  id: '11',
  descriprion: 'reverberation twelve',
  createdAt: new Date('2018-02-12T20:00:00'),
  author: 'Old Toshi',
  photoLink: 'http://skjew.com/userfiles/clauses/large/1050_kak-samostoyatelno-zapisat.png',
  likes: [' Katarina Ventrella', ' Castanea Crenata', ' Michiro Endo' ],
  hashTags: [' #somethingnew']
}

let content = document.getElementsByClassName('content')[0]
window.domModule = (function () {
  return {
    createPhotoPost: function (post) {
      window.func.photoPosts.push(post)
      let div = document.createElement('div')
      div.id = post.id
      div.className = 'photopost'
      let upper =
                '<output class="info">' + post.author + ' at ' + post.createdAt.toLocaleString() + '</output>'
      let lower =
                '<output class="description">' + post.descriprion + '</output>' +
                '<output class="hashTags">' + post.hashTags + '</output>' +
                '<output class="likes">' + post.likes + ' like this' + '</output>' +
                '<output class="buttons">' +
                '<button class="like">' +
                '<button class="edit">' +
                '<button class="delete">' +
                '</output>'
      div.innerHTML = '<img class="photo"src = "' + post.photoLink + '"alt="photo">'
      div.innerHTML = upper + div.innerHTML + lower
      return div
    },

    getPhotoPost: function (id) {
      let post = window.func.getPhotoPost(id)
      content.appendChild(this.createPhotoPost(post))
      return post
    },

    getPhotoPosts: function (skip = 0, top = 10, filterConfig) {
      let posts = window.func.getPhotoPosts(skip, top, filterConfig)
      posts.forEach((elem) => {
        content.appendChild(this.createPhotoPost(elem))
      })
    },

    editPhotoPost: function (id, photoPost) {
      const post = window.func.getPhotoPost(id)
      if (!post) {
        return false
      }
      if (window.func.validatePhotoPost(post)) {
        if (photoPost.photoLink) {
          post.photoLink = photoPost.photoLink
        }
        if (photoPost.description) {
          post.description = photoPost.description
        }
        if (photoPost.hashTags) {
          post.hashTags = photoPost.hashTags
        }
        let i = window.func.photoPosts.findIndex(elem => elem.id === id)
        window.func.photoPosts[i] = post
        return true
      }
      return false
    },

    removePhotoPost: function (id) {
      const post = window.func.getPhotoPost(id)
      if (!post) {
        return false
      }
      window.func.photoPosts.splice(window.func.photoPosts.indexOf(post), 1)
      // func.sortByDate(photoPosts);
      return true
    }
  }
})
()

window.domModule.createPhotoPost(post11)
window.domModule.getPhotoPosts(0, 11, {author: 'Old Toshi'})
window.domModule.getPhotoPosts(0, 10)
window.domModule.editPhotoPost('1', post11)
window.domModule.removePhotoPost(('6'))
window.domModule.getPhotoPosts(0, 9)
