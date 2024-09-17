// 1. Given a number. Print “odd” if the number is odd and “even” if it’s even.
let numOne = 24
let odd = numOne % 2
if (odd===0 ) {
    console.log('odd')
}else  {
    console.log('even')
}         

//  2. Given two numbers print 1 if one of them is divisible by the other one, otherwise print 0.
let numberOne = 4
let numberTWo = 16
if (numberOne / numberTWo || numberTWo / numberOne)  {
alert('1') 
} else ('0')

// 3. Given two variables, which are the angles of a triangle. Find the third angle of the
// triangle. (Sum of the angles of a triangle equals 180 degrees).
let cornerOne = 30
let cornerTwo = 60
let cornerThr = 180 - cornerOne - cornerTwo
  console.log(cornerThr)
// 4. Given five numbers as input. Calculate and print the average of the numbers(without
// using arrays).
let randomNomOne = 44
let randomNomTwo = 78
let randomNomThr = 23
let randomNomFour = 12
let randomNomFive = 3
let averageValue = (randomNomOne + randomNomTwo + randomNomThr + randomNomFour + randomNomFive) / 5 
    console.log(averageValue) 
 
// 5. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
// 5. Check if a number is a multiple of 3, 5 or 7 and output the appropriate message.
let multiple = 725
if (multiple % 3==0 && multiple % 5==0 && multiple % 7==0 ) {
    console.log('725 is a multiple of 3, 5 and 7.')
}else if (multiple % 5==0) {
    console.log('725 is a multiple of 5')
}else if (multiple % 3==0 && multiple % 7==0) {
    console.log('725 is multiple of 3 and 7')
}else if (multiple % 7==0 ) {
    console.log('725 is multiple of 7') 
}else if (multiple % 3==0) {
    console.log('725 is multiple of 3')
}
    
