//
console.log("-------------------");
//

//ekta variable er vitor jokhon function declear kora hoy tokhon take bole function expression
//function expression hoistion hoy na


var expression = function (){
    console.log("this is function expression");
}
expression();

//
console.log("-------------------");
//

//parameter o pass kora jabe
var a = function(message_1, message_2){
    console.log(message_1, message_2);
}
a("this is message_1" , "this is message_2")
