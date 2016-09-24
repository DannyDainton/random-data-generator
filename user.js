// Dependencies 
var casual = require('casual');

// Custom Data Set

var password = '#A#B#C#D#E#F#';

casual.define('user', function() {
    return {
        Firstname: casual.first_name,
        Lastname: casual.last_name,
        Password: casual.numerify(password)
    };
});

// Write the result to the concole

console.log(casual.user);