function palindrome(message){
    var reversed = '';
    for (var i = message.length; i >= 0; i--){
        reversed = reversed + message.charAt(i);
    }
    if (reversed == message){
        return true;
    }
    return false;
}

palindrome('hello'); // should return false
palindrome('abcba'); // should return true
console.log(palindrome('hello'));
console.log(palindrome('abcba'));