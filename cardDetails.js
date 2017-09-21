// Dependencies

const casual   = require('casual')
const jsonfile = require('jsonfile')
 
const file = 'cardDetails.json'
jsonfile.spaces = 4

// Random Card Data Set

casual.define('cardDetails', () => {
    return {
	Name	    : casual.full_name,
	Card_Type   : casual.card_type,
	Card_Number : casual.card_number(casual.card_type),
	Card_Expiry : casual.card_exp
    }
})

// Write the result to a json file

jsonfile.writeFile(file, casual.cardDetails)
