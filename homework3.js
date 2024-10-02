//1. Given a number. Print the sum of digits.
//option "for"
let count = 0 
for (let i =+prompt('number');i>0;i=Math.floor(i/10)) {
    count += i % 10
} console.log(count)
//option "while"
count = 0
let i =+prompt('number') 
while(i>0) {
    count += i % 10;  
    i = Math.floor(i / 10);
}  console.log(count)

//2. Given a number. Print the multiplication of digits.
//option "for" 
count = 1
for (let a =+prompt('number');a>0;a=Math.floor(a/10)) {
    count *= a % 10
} console.log(count)

//option "while"
count = 1
let a = +prompt('number')
while(a>0) {
    count *= a % 10
    a=Math.floor(a/10)
} console.log(count)   


//3. Insert a number. Calculate product and sum of the digits of the number. If product is
//divisible by the sum, print the quotient, otherwise print the remainder.
//option "for"



//option "while"
   





