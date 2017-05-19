'use strict'

const instrumentList = require('./instruments.json')
const zipCodesNearNashville = require('./just-zips.json')
const getRandomInstrument = () => {
  return instrumentList[Math.floor(Math.random() * instrumentList.length)].instrument
}
const isUserNearNashville = (user) => {
  return zipCodesNearNashville.includes((user.location.postcode).toString())
}

module.exports.factory = (users) => {
  return users
    .map(user => user.instrument = getRandomInstrument())
    .filter(user => isUserNearNashville(user))
}
