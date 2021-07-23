function reverseString(message){
    var reversed = '';
    for (var i = message.length; i >= 0; i--){
        reversed = reversed + message.charAt(i);
    }
    return reversed;
}

reverseString('hello'); // should return 'olleh'
console.log(reverseString('hello'));