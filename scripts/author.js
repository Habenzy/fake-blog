let authorId = document.location.hash.slice(1)
let postCont = document.getElementById('posts')

fetch('http://jsonplaceholder.typicode.com/users/' + authorId)
  .then(res =>  res.json())
  .then(authorObj => {
    document.getElementById('name').textContent = authorObj.name
  })

fetch('http://jsonplaceholder.typicode.com/posts?userId=' + authorId)
  .then(res => res.json())
  .then(posts => {
    posts.forEach(post => {
      let link = document.createElement('a')
      let listItem = document.createElement('li')
      //with the authors name as it's content
      link.textContent = post.title
      link.href = "/post.html#" + post.id

      //putting the link in the list
      listItem.appendChild(link)
      postCont.appendChild(listItem)
    })
  })