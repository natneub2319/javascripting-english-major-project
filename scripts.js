/* let userInput;
userInput = prompt("What do you want to have for dinner?", "Type your answer here.");
if ( userInput === "burrito" ) {
  $("#response").html("Brilliant choice!");
} else {
  $("#response").html("Don’t you want a burrito?");
}
*/

/* let userInput;
userInput = prompt("Who is your favorite music artist?", "Type your answer here.");
if ( userInput === "Queen" ) {
  $("#response").html("We are the champions, my friend! You got great taste");
} else {
  $("#response").html("Another one bites the dust");
}
*/

/* let makeABurrito;
makeABurrito = function(beansVariable){
  let beansResponse;
  beansResponse = "You ordered " + beansVariable + " beans. Good choice!";
  $("#response").html(beansResponse);
};
  let blackBeans;
  blackBeans = "black";
  makeABurrito(blackBeans);
*/ 

let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayOfStrings[2]);
