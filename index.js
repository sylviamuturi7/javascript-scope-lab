// Write your solution in this file!

// STEP 1: GLOBAL VARIABLES 
const burgers = ['Hamburger', 'Cheeseburger'];  
let featuredDrink = 'Strawberry Milkshake';     

// STEP 2: FUNCTION SCOPE
function addBurger() {
  // This newBurger variable ONLY exists inside this function
  const newBurger = 'Flatburger';
  
  // But we CAN use the global burgers array from inside here
  // It's like using something from the living room while in the kitchen
  burgers.push(newBurger);
}

// STEP 3: BLOCK SCOPE 
// Variables inside {} curly braces can ONLY be used inside those braces
if(true) {  // This will always run (true is always true!)
  // This variable ONLY exists inside these curly braces {}
  const anotherNewBurger = 'Maple Bacon Burger';
  
  // We can still use the global burgers array from inside this block
  burgers.push(anotherNewBurger);
  
}

// STEP 4: CHANGING GLOBAL VARIABLES FROM INSIDE FUNCTIONS
// Functions can read AND change global variables
function changeFeaturedDrink() {
  // We're changing the global featuredDrink variable from inside this function
  featuredDrink = 'The JavaShake';
}

// Examples
// console.log(featuredDrink);     // Shows: Strawberry Milkshake
// changeFeaturedDrink();          // Calling the function to change the drink
// console.log(featuredDrink);     // Should now show: The JavaShake
// addBurger();                    // Add Flatburger to the array (list of burgers)
// console.log(burgers);           // Should show all burgers including Flatburger