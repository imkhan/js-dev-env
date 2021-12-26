import { generate, extend } from "json-schema-faker"
import { schema } from "./mockDataSchema"
import fs from 'fs'
import chalk from 'chalk'

/* eslint-disable no-console */

//Extend JSF with the fake libs you want to use
extend('faker', () => require('faker'))
const json = JSON.stringify(generate(schema))

fs.writeFile('./src/api/db.json', json, err => {
  if (err){
    return console.log(chalk.red(err))
  } else {
    console.log(chalk.green("Mock data generated."))
  }
})