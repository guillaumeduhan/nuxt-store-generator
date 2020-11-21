#!/usr/bin/env node

const fs = require('fs');
const chalk = require('chalk');
const model = require('./model.json')
const generator = require('./templates/generator.js')
const helpers = require('./templates/helpers.js')
const types = model.data.files.types

String.prototype.capitalize = function () {
  let c = this.charCodeAt(0)
  if (97 <= c && c <= 122) c -= 32

  return String.fromCharCode(c) + this.slice(1)
}

if (!process.argv[2]) {
  console.error(chalk.red.bold('😈 You must provide a store name !'))
  console.error(chalk.red.bold('   nuxt-store <my-store-name>'))
  process.exit(1)
}

let storeName = helpers.generateStoreName(process.argv)

const generateStore = () => {
  fs.mkdirSync(storeName);
  types.forEach((x) => {
    fs.writeFileSync(`${storeName}/${x}.js`, generator[x](storeName), function (err) {
      if (err) throw err;
    });
  })
}

if (!fs.existsSync(storeName)) {
  generateStore();
  console.error(chalk.green.bold(`👍 Success ! New store ${storeName} created.`))
  process.exit(1)
} else {
  console.error(chalk.red.bold(`😈 Error ! Store ${storeName} already exists.`))
  process.exit(1)
}

// end of the file