//1. Given an age, figure out whether someone is a baby(1 months - 12 months), toddler (1
//year - 2 years), child(3 years - 12 years ), teenager(13 years - 17 years) or adult(18
//years and more ). Also check that age in months is between 1 and 12.

let age = prompt('how old are you') 

if (age > 1 && age < 2) {
    console.log('yoddler') 
} else if (age > 3 && age <12) {
    console.log('child')
} else if (age > 13 && age < 17) {
    console.log('teenager')
} else if (age >= 18) {
    console.log('adilt')
} else {
    console.log('baby')
}
 
//2. Given three numbers. Sort them by the ascending order.
let numOne = +prompt('giv a number')
let numTwo = +prompt('giv a number')
let numThree = +prompt('giv a number')

if (numOne>numTwo && numTwo>numThree) {
    console.log(numThree, numTwo, numOne)
} else if (numOne<numTwo && numTwo<numThree) {
    console.log(numOne, numTwo, numThree) 
} else if (numThree>numOne && numOne>numTwo) {
    console.log(numTwo, numOne, numThree)
} else if (numTwo<numThree && numThree<numOne) {
    console.log(numTwo, numThree, numOne)
} else if (numThree<numTwo && numTwo<numOne) {
    console.log(numThree, numTwo, numOne)
} else if (numOne>numThree && numThree>numTwo) {
    console.log(numTwo, numThree, numOne)
} else if (numThree<numOne && numOne<numTwo) {
    console.log(numThree, numOne, numTwo)
}



//3. Find the sign of product of three numbers without multiplication operator. Display the
//specified sign.












//4. Given the following code rewrite it using only two if operators. (Hint: use logical
//operators).
var n = +prompt();

var i = 0;
var j = 0;

if (n%2===0) {
 if (!Math.fround(n / 10)){
    i +=1;
 }
}
if (n%3===0) {
  if(n%10===1) {
    j += 1;
  }  
} 
    
// decision ex.4
var n = +prompt();

var i = 0;
var j = 0;

if (n%2===0 && !Math.fround(n/10)) {
    i += 1;
}
if (n%3===0 && n%10===1) {
    j += 1;
}


//5. Given a number. Print all digits of the given number.
let numfirst = +prompt('give a first number')
let numSecond = +prompt('give a second number')
let numThird = +prompt('give a third number')
console.log= (numfirst + ',' + numSecond + ',' + numThird )