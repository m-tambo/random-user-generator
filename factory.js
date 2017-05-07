'use strict'

const instrList = require('./instruments.json')

module.exports.factory = (array) => {
    // import an array of zip codes (codes within 100 miles of nashville, in this case)
  let zipArray = require('./just-zips.json')
    // add a random item from list to each user
  array.map(x => x.instrument = instrList[Math.floor(Math.random() * instrList.length)].instrument)
    // remove any users not within the imported array of zip codes
  let newArray = array.filter(y => (zipArray.includes((y.location.postcode).toString()) === true ? y : false))

  console.log("number of users added:", newArray.length)
  return newArray
}
