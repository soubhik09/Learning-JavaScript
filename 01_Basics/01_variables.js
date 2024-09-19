const accountId = 144553
let accountEmail = "soubhik@gmail.com"
var accountPassword = "12345"
accountCity = "Kolkata"
let accountState;

// accountId = 2 // not allowed

accountEmail = "sp@gmail.com"
accountPassword = "1234321"
accountCity = "Mumbai"

console.log(accountId);

/*
Prefer not to use var because of issue in block scope and functional scope
 */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
