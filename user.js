// Dependencies 
const casual = require('casual')

// Custom Data Set

const password = '#A#B#C#D#E#F#'

casual.define('user', () => {
    return {
        Firstname: casual.first_name,
        Lastname: casual.last_name,
        Password: casual.numerify(password)
    }
})

// Write the result to the console

console.log(casual.user)
