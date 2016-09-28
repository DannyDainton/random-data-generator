// Dependencies

var casual   = require('casual');
var jsonfile = require('jsonfile')
 
var file = 'cardDetails.json'
jsonfile.spaces = 4

// Random Card Data Set

casual.define('cardDetails', function() {
    return {
		Name 		: casual.full_name,
		Card_Type   : casual.card_type,
		Card_Number : casual.card_number(casual.card_type),
		Card_Expiry : casual.card_exp
    };
});

// Write the result to a json file

jsonfile.writeFile(file, casual.cardDetails);