import express from 'express'
import path from 'path'
import open from 'open'
import webpack from 'webpack'
import config from  '../webpack.config.dev'
import wdm from 'webpack-dev-middleware'

let port = 3000
let app = express()
const compiler = webpack(config)

/* eslint-disable no-console */

app.use(wdm(compiler, {
  publicPath: config.output.publicPath
}) )

app.get('/users',(req, res)=>{
  let users = [
    {"id":1, "firstName":"imran", "lastName":"khan", "email":"ik@cs.com"},
    {"id":2, "firstName":"atan", "lastName":"babu", "email":"ab@cs.com"},
    {"id":3, "firstName":"xero", "lastName":"yama", "email":"xy@cs.com"}
  ]
  res.json(users)
})
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, err => {
  if (err){
    console.log(err)
  } else {
    open(`http://localhost:${port}`)
  }
})