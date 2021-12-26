import express from 'express'
import path from 'path'
import open from 'open'
import compression from 'compression'

let port = 3000
let app = express()

/* eslint-disable no-console */

app.use(compression()) // To enable GZip compress in Express
app.use(express.static('dist'))

app.get('/users',(req, res)=>{
  let users = [
    {"id":1, "firstName":"imran", "lastName":"khan", "email":"ik@cs.com"},
    {"id":2, "firstName":"atan", "lastName":"babu", "email":"ab@cs.com"},
    {"id":3, "firstName":"xero", "lastName":"yama", "email":"xy@cs.com"}
  ]
  res.json(users)
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'))
})

app.listen(port, err => {
  if (err){
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})