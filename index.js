const name = "Tassa";
// ​
// //We can 'concatenate' strings together...but this is ugly and will 
// //const HTMLstring = "<html><body><p>My name is " + name +"</p></body></html>";
// ​
// //Another way is to use TEMPLATE LITERALS
// //Step 1: use BACKTICKS `` to encapsulate the template
// //Step 2: use ${} to surround variables that you want to swap in!
const HTMLstring = "<html> <body><p>My name is "+ name + "</p></body></html>";
// const HTMLstring = "This is a string";
// ​

console.log(HTMLstring)