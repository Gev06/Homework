//1. Given a positive integer. Bring the last digit of the number to the beginning. Print the new
//number. If the last digit of the inserted number is 0, number remains the same. 


function positiveInteger(a) {
    let number = a;
   if (a%10===0) {
       return a;
   } else {
       return a%10 + '' + Math.floor(a/10);
   }
}

//2. Insert a digit and a number. Check whether the digits contains in the number or not.


//3. Enter a number. Reverse its first and last digits. Print the new number.


function reverse(a) {
    let numberA = a;
     if (a<10) {
         return a;
     } else {
         return a%10 + '' + Math.floor(a/10);
   }
}

//4. Enter a number. Find the difference between its biggest and smallest digits.


function difference(b) {
    let numberB = b;
     
       

}