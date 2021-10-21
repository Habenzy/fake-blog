let authorDisp = document.getElementById('author')
let titleDisp = document.getElementById('title')
let content = document.getElementById('content')
let postId = document.location.hash.slice(1)
fetch('http://jsonplaceholder.typicode.com/posts/' + postId)
  .then(res => res.json())
  .then(postObj => {
    titleDisp.textContent = postObj.title
    content.textContent = postObj.body
    //Once inside a promise chain you can't break out
    //So we need to do this second fetch from *inside* of the first fetch
    fetch('http://jsonplaceholder.typicode.com/users/' + postObj.userId)
      .then(res => res.json())
      .then(authorObj => {
        authorDisp.textContent = authorObj.name
      })
  })