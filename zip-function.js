// this is a single-use app which takes an old file
      // (zips within 100 miles of nashville -- https://www.zipcodeapi.com/API)
// and strips it down to an array
      // (just the zip codes themselves)
// and writes that array to a new file

const { writeFile } = require('fs')

let oldFile = require('./zips-near-nashville.json')
let newFile = './just-zips.json'

const makeArray = new Promise ((res, rej) => {
  let zipArray = []
  for (let i = 0; i < oldFile.zip_codes.length; i++) {
    zipArray.push(zips.zip_codes[i].zip_code)
  }
  if (zipArray.length > 0) res(zipArray)
  else rej('zips did not add')
})

makeArray
  .then((array) => {
    strungData = JSON.stringify(array) // gotta make it a string to use writeFile
    writeFile(newFile, strungData, function(err) { // can use writeFile or appendFile
      err ? console.log(err) : console.log("zip codes saved to json")
    })
  })
