/* function reversestr(str) {
let reversed = "" ;
for (let index = str.length-1; index >=0; index--) {
    reversed +=  str[index]
    
}
console.log("Reversed string:", reversed);
return reversed
}
function isPalindrome(str) {
    let reversed = reversestr(str);
    if (str === reversed) {
      console.log("given value " +str+ " Palindrome")
    } else {
       console.log("given value " +str+ " is not Palindrome")
    }
}

isPalindrome("Test")
isPalindrome("MADAM")

 */


function isPalindrome(str) {
let reversed = '' ;
for (let index = str.length-1; index >=0; index--) {
    reversed +=  str[index]
    
}
console.log("Reversed string: ", reversed);

    if (str === reversed) {
      console.log("given value " +str+ " Palindrome")
    } else {
       console.log("given value " +str+ " is not Palindrome")
    }
}

isPalindrome("Test")
isPalindrome("MADAM")

 