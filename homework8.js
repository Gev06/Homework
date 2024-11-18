// 1. Given an array of numbers. Print frequency of each unique number. (Frequency is the
// count of particular element divided by the count of all elements)

let arr = [2,2,1,1,3,3,7,7];
function frequency(array) {
    let obj = {};
    for (let i = 0;i<array.length;i++) {
        let tmp = 0;
        if (!obj.hasOwnProperty(String(array[i]))) {
           for (let j = 0;j<array.length;j++) {
                 if (array[i] == array[j]) {
                     obj[String(array[i])] = tmp += 1/array.length;
               }
            }
        }
    }
    return obj;
}


// 2. Write a function, which receives an array as an argument which elements arrays of
// numbers. Find biggest negative number of each array. Return product of that numbers.If
// there is not any negative number in an array, ignore that one. Check that items of the
// given array are array.

let arr4 = [[1,2,-3,-2],[1,3],[1,-6,4,-3]]

function fn(arr) {
    // debugger
    let res = []
    let negativ = 1;
    if (arr.length>0) {  
    for (let i = 0;i<arr.length;i++) {
        let tmp = -Infinity;
        for (let j = 0;j<arr[i].length;j++) {
            // arr = [1,2,-3,-2]
            if (arr[i][j]<0) { 
                if (tmp<arr[i][j]) {
                    tmp = arr[i][j];
                }
        }
    }
    if (tmp !== -Infinity) {
        res.push(tmp);
        }
    }
        for (let i = 0;i<res.length;i++) {
            if (res.length<1) {
                return res[i];
            }else{
               negativ *= res[i] 
            } 
        } 
        return negativ;
    }else{
    return 'Invalid Argument';
    }
}