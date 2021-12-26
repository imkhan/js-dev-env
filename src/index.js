import './index.css'
import {getUsers} from './api/userAPI'

getUsers().then(result => {
  let usersList = ""
  result.forEach(user => {
    usersList += `
      <tr>
        <td>${user.firstName}</td>
        <td>${user.lastName}</td>
        <td>${user.email}</td>
      </tr>
    `
    global.document.getElementById("users-list").innerHTML = usersList
  })
})