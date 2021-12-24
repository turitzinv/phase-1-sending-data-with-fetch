// Add your code here
/*function submitData(name, email) {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  Accept: "application/json",
  },
  return fetch('http://localhost:3000/users')
  body: JSON.stringify({name,email})
} */

function submitData(name, email){
  return fetch('http://localhost:3000/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({name,email}),
  })
  .then(response => response.json())
  .then(data => document.querySelector("body").append(data.id))
  .catch(message => document.body.append(message))
}

