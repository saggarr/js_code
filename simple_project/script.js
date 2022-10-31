//alert("hello sagar"); //browser er window popup show kore

//document.write("sallu bhai");//console a output show na kore browser a show kore

//user input section
let userOneValue = prompt("user input one");   //window popup a user input nebe
let userTwoValue = prompt("user input two");   //window popup a user input nebe

//string to number convert section
userOneValue = parseInt(userOneValue);   //user value string hisebe store hoy, tai parse kore ta nukmber akare convert kore
userTwoValue = parseInt(userTwoValue);   //user value string hisebe store hoy, tai parse kore ta nukmber akare convert kore


//operation section
const Addition = userOneValue + userTwoValue;   //variable a user input jog kore
const Subtraction = userOneValue - userTwoValue;   //variable a user input biyog kore
const Multiplication = userOneValue * userTwoValue;    //variable a user input gun kore
const Division = userOneValue / userTwoValue;    //variable a user input vag kore
const Reminder = userOneValue % userTwoValue;    //variablwe a user unput er vagsesh kore


//outdput section
document.write("input one" + "=" + userOneValue + "<br>");    //browser a user input_1 show kore
document.write("input two" + "=" + userTwoValue + "<br>");    //browser a user input_2 show kore

document.write("----------------------" + "<br>");

document.write(userOneValue + "+" + userTwoValue + "=" + Addition + "<br>");
document.write(userOneValue + "-" + userTwoValue + "=" + Subtraction + "<br>");
document.write(userOneValue + "*" + userTwoValue + "=" + Multiplication + "<br>");
document.write(userOneValue + "/" + userTwoValue + "=" + Division + "<br>");
document.write(userOneValue + "%" + userTwoValue + "=" + Reminder + "<br>");



