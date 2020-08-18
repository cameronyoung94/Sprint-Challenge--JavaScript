// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

// it can access it because it is placed higher in the function above nested function if it was below it would not be able to access it.

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(number){ //creating a function
  const numbers = [] //making an empty array
  for(i=0; i<=number; i++){ //looping through number starting at 0 number in this case equals to 4 
    numbers.push(i) // pushing each number from 0 to 4 
  }
  const result = numbers.reduce(function(adder, element){ //reduce is making it to where it is a single value instead of printing out every number from 0 to 4 and accumulates the numbers together
    return adder + element; //returns adder which in this case is the function summation plus element which in this case is the number 4
  },0);
  return result; 
 }

console.log(summation(4));