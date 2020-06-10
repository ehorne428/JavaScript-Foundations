// 🌟🌟🌟 M V P 🌟🌟🌟//

// 🏡 Task 1: Variables
/* Create variables for principal, interest rate, and years. Assign them the values 200000, 0.05, and 30 respectively. Create another value called name and give it the value of your own name.
*/

let principal = 200000;
let int = 0.05;
let years = 30;
const name = "Emily";

// 🏡 Task 1.5: Simple Math
/* To create a monthly mortgage rate calculator, we need to know the number of years in months and the monthly interest rate. 

(1) Create a variable called `monthlyInterestRate` and give it the value of interest rate divided by 12. 
(2) Create another variable called `periods` and give it the value of years*12.
*/

let monthlyInterestRate = int/12;
let periods = years*12;

// 🏡 Task 2: Harder Math
/* Create your calculator! Use the formula in the ReadMe (also below) to run calculations on your numbers. Save the final value into a variable called monthlyRate. 

M = P [ I ( 1 + I )^N ] / [ ( 1 + I )^N – 1 ]

Hint: while these calculations can be done in one line, it might be helpful to create seperate variables to hold parts of your equation. That might look like this:

(1) Create a variable called n1 and set it equal to  (1 + I )^N
(2) Create a variable called n2 and set it equal to n1 * I
(3) Create a variable called numerator and set it equal to n1 * n2 
(4) Create a variable called denominator and set it equal to n1 - 1 
(5) Create a variable called monthlyRate and set it equal to numerator/denominator

Hint #2: you'll need to use the `math` object for parts of this calculation!

When your math is correct, monthlyRate will equal 1073.64
*/

let n1 = Math.pow(( 1 + monthlyInterestRate ), periods);
let n2 = n1* monthlyInterestRate;
let numerator = n1 * n2;
let denominator = n1 -1;
let monthlyRate= numerator/denominator;
let mortgage = principal * (monthlyInterestRate*n1)/denominator
console.log (mortgage.toFixed(2));

// 🏡 Task 3: Function
/* Create a function called `mortgageCalculator` that combines all of the steps from task 1 and 2 and returns a sentence "{Name}, your monthly rate is ${monthlyRate}"

If your name is `Oscar` mortgageCalculator() should return "Oscar, your monthly rate is 1073.64"
*/

function mortgageCalculator1() {
    return (`${name}, your monthly rate is ${mortgage.toFixed(2)}`)
}
console.log(mortgageCalculator1());


// 🏡 Task 4: Arguments and Parameters
/* Substitute the variables in your functions for parameters such that you can substitute `P`, `I`, and `N` when you call the function.

For example,
mortgageCalculator(200000, 0.05, 30); <-- should return 1,073.64
*/

function mortgageCalculator(P,I,N){
    I=I/12
    N = N*12;
    let n1 = Math.pow((1+ monthlyInterestRate), N);
    let n2 = n1 * monthlyInterestRate;
    let numerator = n1*n2;
    let denominator= n1 - 1;
    let monthlyRate = numerator/denominator;
    let rate = P * (monthlyInterestRate*n1)/denominator;
    return rate.toFixed(2);
}

console.log(mortgageCalculator(200000, 0.05, 30))

// 🏡 Task 5: Conditionals
/* Add another paramter to your function called credit score. This parameter will be a number between 0 and 800 (a credit score).

Then, add control flow within your function such that IF creditScore is above 740, interest rate drops by 0.5%, if credit score is below 660, interest rate increases by 0.5% and if credit score is anywhere between 660 and 740 interest rate doesn't change.

Hint: To drop an interest rate by 5% you can take monthlyRate and multiply it by 0.95. Similarly, to increase an interest rate by 5% you'd do monthlyRate * 1.05. 
*/
function mortgageCalculator2 (P, I, N, creditScore){
    if(creditScore > 740){
        var I = I - 0.005;
     } else if (creditScore < 660){
         var I = I + 0.005
     }
     return(
        Math.round(P * (((I/12) * Math.pow((1 + (I/12)), (N * 12))) / (Math.pow((1 + (I/12)), (N * 12)) - 1)) *100)/100
        )
   /* I=I/12
    N = N*12;
    let n1 = Math.pow((1+ monthlyInterestRate), N);
    let n2 = n1 * monthlyInterestRate;
    let numerator = n1*n2;
    let denominator= n1 - 1;
    let monthlyRate = numerator/denominator;
    let rate = P * (monthlyInterestRate*n1)/denominator;
    return rate.toFixed(2);*/
 }

console.log(mortgageCalculator2(200000, 0.05, 30, 799));


   

// 🏡 Task 6: Loops
/* Write a new function called variableInterestRate. This function should be the same as mortgageCalculator, except it should console.log the monthly payment for 10 different interest rates at 0.5% increments plus or minus 2% from the inputted interest rate. Complete these calculations using a for loop.

For example, variableInterestRate(200000, 0.04, 30) should console.log:

"{Name}, with an interest rate of 0.02, your monthly rate is $739"
"{Name}, with an interest rate of 0.025, your monthly rate is $790"
"{Name}, with an interest rate of 0.03, your monthly rate is $843"
"{Name}, with an interest rate of 0.035, your monthly rate is $898"
"{Name}, with an interest rate of 0.04, your monthly rate is $955"
"{Name}, with an interest rate of 0.045, your monthly rate is $1013"
"{Name}, with an interest rate of 0.05, your monthly rate is $1074"
"{Name}, with an interest rate of 0.055, your monthly rate is $1136"
"{Name}, with an interest rate of 0.06, your monthly rate is $1199"
*/
function variableInterestRate(P, I, N){
    for (let i=0; i < 10; i= i+.005){
        i = i - 0.02;
        I = I/12;
        N = N*12;
        let name = "Emily";
        let n1 = Math.pow((1+ monthlyInterestRate), N);
        let n2 = n1 * monthlyInterestRate;
        let numerator = n1*n2;
        let denominator= n1 - 1;
        let monthlyRate = numerator/denominator;
        let rate = P * (monthlyInterestRate*n1)/denominator; 
        /*let rate = P * (monthlyInterestRate * (Math.pow((1+ monthlyInterestRate), N))/((Math.pow((1+ monthlyInterestRate), N)) - 1));*/
        
        console.log ( `${name}, your monthly rate is $ ${rate.toFixed(2)}`);
    }
       console.log (variableInterestRate(200000, 0.04, 30));

}
