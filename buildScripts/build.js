/* eslint-disable no-console */

import webpack from 'webpack'
import webpackConfig from '../webpack.config.prod.js'
import chalk from 'chalk'

process.env.NODE_ENV = 'production'

console.log(chalk.blue("Generating minified bundle for production. This will take a moment ..."))

webpack(webpackConfig).run( (err, stats) => {
  if (err) {
    console.log(chalk.red(err))
    return 1
  }

  const jsonStats = stats.toJson()

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)))
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack has generated following warnings:'))
    return jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)))
  }

  console.log(`Webpack Stats: ${stats}`)

  //If we've reached so far, it means the build is successful
  console.log(chalk.green("Congratulations! The build is successful. Build is generated in '/dist' folder "))

  return 0
})