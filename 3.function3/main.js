function alphabetSort(message){
    message = message.split('')
    message = message.sort().join('');
    return message;
}

alphabetSort('hello'); // should return 'ehllo'
console.log(alphabetSort('hello'));