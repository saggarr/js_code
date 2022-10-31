console.log("-------------------");

//var vs let vs const

//var diye jemon amra variable declear kori, temni let ebong const diyeo amra variable declear kori

// var sadharonto global variable hoy orthat je kono jayga theke access neoa jay

//let o const sadharonto local variable hoy orthat code er oi scope thekei sudhu tader access kora jabe


//jokhon kono kisuke bare bare re-declear othoba re-assign korte hoy tokhon amra var use korbo
//mane var diye amra same name a onekgula variable  banate parb o
var num = 0; //variable declear kora hoyeche
var num = "Sagar"; //variable re-declear kora hoyeche
console.log(num); //output sagar dekhabe karon last re-decleared value sagar
//
console.log("-------------------");
//
var a = 0; //variable declear
var a = "sagar"; //variable re-declear
a = "sagrar biswas"; //variable re-assign
console.log(a); //output hobe sagar biswas
//
console.log("-------------------");
//
// same name er variable ke amra jate bare bare re-assign korte na pari tar jonno amra let diye variable declear kori.

//let keywoard diye variable declear korle amra sei variabke ke re-declear korte parbo na tobe take amra re-assign korte parbo
//mane let diye same name a ektar beshi variable declear kora jabe na

let b = "aaa"; //variable decleared with let
b = "bbb"; //re-assign variable
console.log(b);//output bbb
//
console.log("-------------------");
//

//const diye variable declear korle amra re-assign  ba re-declear kisui korte parbo na. like sallu bhai... ekbar commitment kore dile nijer kothao r sune na.

const x = "sallu baba";
//const x = "ssfdsfs"; //no re-declear
//x = "dffsf"; //no re-assign
console.log(x);


//amra maximum jaygay let diyei variable declear korbo


