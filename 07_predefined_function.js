console.log("--------------------------")//this is nothing

//predefined function
//Math.absolute() er kaj hole negetive man ke positive kora
var a = 5;
var b = -6;
var c = Math.abs(b);//b er man Math.abs() a rekhe positive kore nilam
var sumAB = a + c;
console.log(sumAB);


//Math.round() er kaj holo doshomik er porer songkha 5 er upor thakle ek barabe
var d = 2.55555555;
var e = 0.499999;
var f = Math.round(d); //var d er man 3 show korbe karon doshomik er pore 5 ache tai doshomike er age 1 jog korbe. 5 er eheye 0.0000001 kom holeo doshomik er age 1 jog korbe na
var g = Math.round(e); //var e er nan 0 show korbe karon doshomik er pore 4 ache.
console.log(f);
console.log(g);



//Math.ceilling() er kaj holo doshomik er pore shunno na theke shunnor chaite boro kisu thaklei doshomik er age 1 jog korbe
var h = 0.0000001;
var i = Math.ceil(h);
console.log(i);//output 1 dekhabe. celling number ke celling a uthay



//Math.floor() er kaj holo doshomik er pore shunno na theke shunnor boro ba doshomik er pore 5 ja kisui thakuk na keno doshomik er age 1 jog korbe na
var j = 1.5000001;
var k = Math.floor(j);
console.log(k); //output 1 e dekhabe. floor number ke floor a namay





//Math.random() er kaj holo random value create kora
var lotary = Math.random();
console.log(lotary);//0-1 er moddhe random value show korbe

var lotary_1 = Math.random() * 100;
console.log(lotary_1);//0-100 er moddhe random value show korbe