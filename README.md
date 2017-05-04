# Random User JSON generator

A small NodeJS server built to get data from the Random User API.

https://randomuser.me/

Using a node module called request-promise, I make an http request with some query parameters (name, email, location, # of results, etc). Then, I convert the returned JSON to string and save it to a .json file, using fs.writeFile.

(in between those steps, I run it through a 'factory' module in case I need to further manipulate the users before saving them to file)

### Resulting file
![screen shot 2017-05-04 at 1 34 24 pm](https://cloud.githubusercontent.com/assets/23462252/25719284/874576de-30ce-11e7-8673-8fd413815ef1.png)
