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