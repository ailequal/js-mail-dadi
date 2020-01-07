// email array
var emailDatabase = ['london@england.uk', 'paris@france.fr', 'berlin@germany.de', 'madrid@spain.es', 'brussels@belgium.be', 'test'];
console.log('email stored in the database: ' + emailDatabase.length);
console.log(emailDatabase);


// ask user email address
var userEmail = prompt("Insert your email address");
console.log('userEmail set to');
console.log(userEmail);


// check that the email is on the list
for (var i = 0; i < emailDatabase.length; i++) {
  if (emailDatabase[i] === userEmail) {
    console.log("Found a match, loading your personal email...");
  }
  // if (emailDatabase[i] !== userEmail ) {
  //   console.log("Your email is not stored in out database, sorry.")
  // }
}


// print a message if found or not
// ??
