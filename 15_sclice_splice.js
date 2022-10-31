console.log("--------------------------")//this is nothing
//slice splice method diye kono array er je kono jayga theke delete ba add kora jay

var str = ["aaa","bbb","ccc","ddd","eee"];
console.log(str.slice(2,3)); //2no index theke 3no index er moddhe ja kisu ase ta show korbe. mane ccc show korbe
console.log(str.slice(2,4));// ccc  ddd show korbe
console.log(str.slice(0,1)); //aaa show korbe
console.log(str.slice(2)); // ccc ddd eee show korbe. sudhu ekta index id dile seikhan theke tar porer puratuku nibe



var str_1 = ["aaa","bbb","ccc","ddd","eee"];
console.log(str_1)
str_1.splice(0,1, "sagar");//0-1 index er aaa ke remove kore sagar bosaise. replace na kore sudhu remove korte chaile sudhu indexno dilei hoto sagar dite hoto na
console.log(str_1);
str_1.splice(0,2);//ekhane replace na kore 0-2 index porjonto remove kore diyeci tai tar porer ccc ddd eee show korbe
console.log(str_1);





