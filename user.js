// Dependencies 
var casual = require('casual');
var jsonfile = require('jsonfile')
 
var file = 'user.json'
jsonfile.spaces = 4

// Custom Data Set

casual.define('user', function() {
    return {
        Firstname: casual.first_name,
        Lastname: casual.last_name,
        Password: casual.password
    };
});

// Write the result to a json file

jsonfile.writeFile(file, casual.user, function (err) {
  console.error(err)
});
