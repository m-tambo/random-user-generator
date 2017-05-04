# random-user-generator

A small NodeJS server built to get data from the Random User API.

Using a node module called request-promise, I make an http request with some query parameters. Then, I convert the returned JSON to string and save it to a .json file, using fs.writeFile.

(in between those steps, I run it through a 'factory' module in case I need to further manipulate the users before saving them to file)
