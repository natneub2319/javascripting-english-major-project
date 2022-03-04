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

/* let arrayOfStrings, arrayOfNumbers, arrayMixed;
arrayOfStrings = ["a", "b", "c"];
arrayOfNumbers = [1, 2, 3];
arrayMixed = ["a", null, true, arrayOfNumbers, [4.5, 5.6]];
$("#response").html(arrayOfStrings[2]);
*/

/* let myBurritoObject;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: 3
  };
$("#response").html(myBurritoObject["tortilla"]);
*/

let myHabaneroSauceSquirts, myBurritoObject;
myHabaneroSauceSquirts = 3;
myBurritoObject = {
  tortilla: "wheat",
  guacamole: true,
  beans: "pinto",
  habaneroSauceSquirts: myHabaneroSauceSquirts,
  spiciness: function(){
    if (myHabaneroSauceSquirts > 0 ){
      alert("This is a spicy burrito!");
    } else {
      alert("This is a mild burrito.");
    }
  }
};
$("#response").html("Your burrito has " + myBurritoObject.habaneroSauceSquirts + " squirts of habanero.");
myBurritoObject.spiciness();
