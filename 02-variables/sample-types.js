var found = true;
var grade = 88.6;
var firstName = "Siti";
var lastName = "Affandi";
//comment
/*
found = 0;
grade = "A";
firstName = false;
*/
console.log(found);
console.log("The grade is " + grade);
console.log("Hi " + firstName + " " + lastName);
//use template strings
//reference variable with ${....}
console.log("Hi ".concat(firstName, " ").concat(lastName));
