let authorList = document.getElementById('authors')
let postList = document.getElementById('posts')
//get all the author objects as JSON
fetch('http://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then((jsonObj) => {
    //iterate over collection of author objects
    jsonObj.forEach(author => {
      //create a link element
      let link = document.createElement('a')
      let listItem = document.createElement('li')
      //with the authors name as it's content
      link.textContent = author.name
      link.href = "/author.html#" + author.id

      //putting the link in the list
      listItem.appendChild(link)
      authorList.appendChild(listItem)
    })
  })


fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(jsonColl => {
    //iterate over collection of author objects
    jsonColl.forEach(post => {
      //create a link element
      let link = document.createElement('a')
      let listItem = document.createElement('li')
      //with the authors name as it's content
      link.textContent = post.title
      link.href = "/post.html#" + post.id

      //putting the link in the list
      listItem.appendChild(link)
      postList.appendChild(listItem)
    })
  })