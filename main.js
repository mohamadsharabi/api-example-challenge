let usersIDsContainer = document.getElementById('usersIdsContainer');

// let request = new XMLHttpRequest();
// request.open('GET', 'https://jsonplaceholder.typicode.com/users')
// request.responseType = 'json';
// request.send()
// request.onload = function() {
//   let users = request.response;

//   for (let user of users) {
//     let userId = document.createElement('div');
//     userId.innerHTML = `
//     <h6 style='margin-top:0px;margin-bottom:0px' >${user.name}</h6>
//     <h5 style='margin-top:0px;margin-bottom:0px' >${user.email}</h5>
//     `
//     userId.className = 'name-email-container'
//     userId.onclick = () => handleClick(user.id);
//     usersIDsContainer.appendChild(userId)
//   }
// }

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then((users) => {
    for (let user of users) {
      let userId = document.createElement('div');
      userId.innerHTML = `
      <h6 style='margin-top:0px;margin-bottom:0px' >${user.name}</h6>
      <h5 style='margin-top:0px;margin-bottom:0px' >${user.email}</h5>
      `
      userId.className = 'name-email-container'
      userId.onclick = () => handleClick(user.id);
      usersIDsContainer.appendChild(userId)
    }})
  

let postsContainer = document.getElementById("postsContainer");
function handleClick(id) {
  postsContainer.innerHTML = '';

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
    .then(response => response.json())
    .then((posts) => {
      for (let post of posts) {
        let thePost = document.createElement('div');
        thePost.innerHTML = `
        <h4>${post.title}</h4>
        <hr>
        <h3>${post.body}</h3>
        `
      postsContainer.append(thePost)
      }
    })
  }





//   let request = new XMLHttpRequest();
//   request.open('GET', `https://jsonplaceholder.typicode.com/posts?userId=${id}`)
//   request.responseType = 'json';
//   request.send();
//   request.onload = function () {
//     let posts = request.response;
//     for (let post of posts) {
//       let thePost = document.createElement('div');
//       thePost.innerHTML = `
//       <h4>${post.title}</h4>
//       <hr>
//       <h3>${post.body}</h3>
//       `
//     postsContainer.append(thePost)
//     }
    
//   }
// }