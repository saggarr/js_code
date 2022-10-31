//
console.log("-------------------");
//

//there are 3 types of scopes 
// 1. block scope
// 2. function scope
// 3. global scope

//
var Name = "globa scope";//ei variable take amra ei code er je kono jayga theke access niye nite parbo. etake bole global scope.
console.log(Name);//ekan theke access neoa jabe

function me(){
    console.log(Name);//ekhan thekeo access neoa jabe
}
me(); //function calling


//
console.log("-------------------");
//



//function er vitor var declear korle ta local ba function variable, karon sei variable ke oi function er vitore chara code er ar kothao theke access kora jabe na
function a(){
    var w = "local/function scope";
    console.log(w);
}
a();
//console.log(w); //ekhan theke w ke access kora jabe na karon w local scope

//
console.log("-------------------");
//


//block scoppe
//nicher code ta 2nd bracket er moddhe thekei sudhu access kora jabe, baire theke access kora jabe na. eitei holo block scope
{
    let block = "block scope";
    console.log(block); //ekhan theke access kora jabe
}
//console.log(block); //ekhan theke access kora jabe na

