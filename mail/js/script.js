// email array
var databaseEmail = ['london@england.uk', 'paris@france.fr', 'berlin@germany.de', 'madrid@spain.es', 'brussels@belgium.be', 'test'];
console.log('email stored in the database: ' + databaseEmail.length);
console.log(databaseEmail);


// ask user email address
var userEmail = prompt("Insert your email address");
console.log('userEmail set to');
console.log(userEmail);
var checkEmail = false;


// check that the email is on the list
for (var i = 0; i < databaseEmail.length; i++) {
  if (databaseEmail[i] === userEmail) {
    checkEmail = true;
  }
}


// print the result message
if (checkEmail == true ) {
  console.log("Found a match, loading your personal email...");
} else {
  console.log("Your email is not stored in out database, sorry.")
}
