console.log("--------------------------")//this is nothing

//push method
var num = [1,2,3,4,5];
var str = ["a","b","c","d","e"];

console.log(num);
num.push(111);//list er seshe 111 add korbe
console.log(num);

console.log(str);
str.push("fff");//list er seshe fff add korbe
console.log(str);


//pop method
var num_1 = [10,11,12,13,14];
var str_1 = ["i","j","k","l","m"];

console.log(num_1);
num_1.pop();//list er last number 14 remove kore
console.log(num_1)

console.log(str_1);
str_1.pop();
console.log(str_1);// last er letter m remove kore


//shift method
var num_2 = [1,2,3,4,5];
var str_2 = ["d","e","f","g","h"];

console.log(num_2);
num_2.shift();//list er first theke 1 remove hobe
console.log(num_2);

console.log(str_2);
str_2.unshift("ggg");//list er surute ggg add korbe
console.log(str_2);