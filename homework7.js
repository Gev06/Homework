/*1. Given an array of strings and numbers. Print the number of integers and the number of
strings in the array.*/
let arr = [1, '10', 'hi', 2, 3];
    let num = 0;
    let str = 0;
for (let i = 0;i<arr.length;i++) {
    if(typeof(arr[i]) === "string") {
        str += 1;
    }else{
        num += 1;
    }
}
console.log('num is' + num + ', ' + 'str is' + str);




/*2. Write a function which receives an array and a number as arguments and returns a new
array from the elements of the given array which are larger than the given number.*/

function largeNumbers(arr, el) {
    let arr2 = [];
    for (let i = 0;i<arr.length;i++) {
        if (el<=arr[i]) {
           arr2.push(arr[i]);
        }
    }
    if (arr2.length>0) {
        return arr2;
    }else{
        return 'Such values do not exist.';
    }
    
}




/*3. Given an array of numbers which is almost sorted in ascending order.  Find the index where sorting
order is violated.*/

function fn(arr) {
    let tmp = -Infinity;
    for (let i = 0;i<arr.length;i++) {      
        if(tmp < arr[i]) {
            tmp = arr[i];
        }else{
            return i;
        }
    }
}



/*4. Given an object. Invert it (keys become values and values become keys). If there
is more than key for that given value create an array.*/