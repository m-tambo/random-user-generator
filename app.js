const rp = require('request-promise')
const { writeFile, appendFile } = require('fs')
const { factory } = require('./factory.js')

const results = 5000 // the api returns a max of 5000 users

const getRandos = () => {
  rp({ // make http call
    uri: `https://randomuser.me/api/?nat=us&results=${results}&inc=name,email,location,picture, login`,
    json: true
  })
  .then((data) => { // send to factory for any alterations
    return factory(data.results)
  })
  .then((newData) => { // stringify and write to json file
    strungData = JSON.stringify(newData, null, '\t') // add parameters null and '\t' to prettify
    appendFile('randomUsers.json', strungData, function(err) { // can use writeFile or appendFile
      err ? console.log(err) : console.log("Random users saved to json")
    })
  })
}

getRandos()
