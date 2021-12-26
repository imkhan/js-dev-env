import './index.css'
import {getUsers, deleteUser} from './api/userAPI'

getUsers().then(result => {
  let usersList = ""
  result.forEach(user => {
    usersList += `
      <tr>
        <td><a href="#" data-id=${user.id}>Delete</a>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `
    global.document.getElementById("users-list").innerHTML = usersList
    
    const deleteLinks = global.document.getElementsByTagName('a')

    Array.from(deleteLinks, link => {
      link.onclick = function(event){
        const element = event.target
        event.preventDefault()
        deleteUser(element.attributes['data-id'].value)
        const row = element.parentNode.parentNode
        row.parentNode.removeChild(row)
      }
    })

  })
})