'use strict'
const instruments = require('./instruments.json')

module.exports.factory = (array) => { // perform map methods to add a random instrument to each user
  console.log(`adding instruments...`)
  array.map(x => x.instrument = instruments[Math.floor(Math.random() * instruments.length)])
  return array
}
