'use strict'

var sayHello = 'Hello';

function     person() {
    var first = 'David';
    var last = 'Shariff';
        
    function firstName() {
        // var sayHello = 'chaoo'; 
        sayHello = sayHello + " Diego"
        console.log(sayHello); 
        return first;
    } 
    function lastName() {
        return last;
    } 
    firstName(); 
    return (sayHello + ' ' + firstName() + ' ' + lastName());
}

console.log(person())