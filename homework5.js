//1. Write a function that accepts a string(a sentence) as a parameter and finds the longest
//word within the string․ If there are several words which are the longest ones, print the
//last word (words can be separated by space).
function longest(str) {
    let current = '';
    let result = '';
    let bigStr = 0;
    for (let i = 0;i<str.length;i++){
        if (str[i] !== ' ') {
            current += str[i];
        } else {
            if(current.length>bigStr) {
                bigStr = current.length;
                result = current;
            }
            current = '';
        }
    } 
    if (current.length>bigStr) {
        result = current;
    }return result;
} 




//2. Write a function to find longest substring in a given a string without repeating characters
//except space character.
//If there are several, return the last one. Consider that all letters are lowercase.












//3. Write a function to compute a new string from the given one by moving the first char to
//come after the next two chars, so &quot;abc&quot; yields &quot;bca&quot;. Repeat this process for each
//subsequent group of 3 chars. Ignore any group of fewer than 3 chars at the end.


function reverse(str) {
    let result = '';
    let i = 0; 
        while (i<str.length) {
            if (i+2<str.length) {
                result += str[i+2];
                result += str[i+1];
                result += str[i];
                i+=3;
            } else {
                result += str[i];
                i++;
            }
        } return result;
}



