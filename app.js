const rp = require('request-promise')
const { writeFile } = require('fs')
const { factory } = require('./factory.js')

const results = 4 // set however many randos you want

const getRandos = () => {
  rp({
    uri: `https://randomuser.me/api/?nat=us&results=${results}&inc=name,email,location,picture`,
    json: true
  })
  .then((data) => {
    return factory(data.results)
  })
  .then((newData) => {
    strungData = JSON.stringify(newData, null, '\t')
    console.log(strungData)
    writeFile('randomUsers.json', strungData, function(err) {
      err ? console.log(err) : console.log("Random users saved to json")
    })
  })
}

getRandos()
