
// var rochona = "SAGAR BISWAS";
// console.log(rochona.toLowerCase())


// var frnds = ("sagar ovi tuhin tushar");
// console.log(frnds.split("sagar")); 


// var a = 10;
// var b = 5;

// var addition = a+b;
// var subtraction = a-b;
// var multiplication =a *b;
// var diivision = a/b;

// console.log("addition is", addition);
// console.log("subtraction is", subtraction);
// console.log("multiplication is", multiplication);
// console.log("division is", diivision);


// var a = -50;
// console.log(Math.abs(a));


// var a = 7;
// var b = 7;
// var sum = a + b;
// var sub = a - b;

// if(a>b){
//     console.log("a is bigger");
// }
// else{
//     console.log('a is smaller')
// }


// var a = 500;
// var b = 500;

// if(a<b){
//     console.log('a is small');
// }
// else if(a>b){
//     console.log('a is bigger');
// }
// else{
//     console.log('a and b are equal');
// }




// var myDate = new Date();

// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getTimezoneOffset());


// var numbers = [2, 55, 5, 66, 4, 23, 0];
// console.log(numbers);

// var friends = ["sagar", "ovi", "anik", "tuhin", "tushar"];
// console.log(friends[2]);
// console.log(typeof(friends));

// var friends = ["sagar", "ovi", "tushar", "tuhin", "mofajjol"];
// friends[4] = "anik";
// console.log(friends);


// var ppl = ["sagar", "tutul", "sharif", "pratap", "shiku", "kanchan"];
// console.log(ppl);
// console.log("after popping");
// ppl.pop("kanu");
// console.log(ppl);


// var ppl = ["sagar", "tutul", "sharif", "pratap", "shiku", "kanchan"];
// console.log(ppl);
// console.log("after pushing");
// ppl.push(235, 52121, "sishir");
// console.log(ppl);


// var ppl = ["sagar", "tutul", "sharif", "pratap", "shiku", "kanchan"];
// console.log(ppl);
// console.log("after shifting");
// ppl.shift();
// console.log(ppl);



// var ppl = ["sagar", "tutul", "sharif", "pratap", "shiku", "kanchan"];
// console.log(ppl);
// console.log("after unshifting");
// ppl.unshift("sonchoy");
// console.log(ppl);



// var ppl = ["sagar", "pratap", "shiku", "kanchan"];
// console.log(ppl);
// console.log("after sliceing");
// console.log(ppl.slice(2,3));
// console.log("after slicing again");
// console.log(ppl.slice(1,2));
// console.log("after slicing again");
// console.log(ppl.slice(0,2));
// console.log("after slicing again");
// console.log(ppl.slice(1,4));



// var ppl = ["sagar", "pratap", "shiku", "kanchan"];
// console.log(ppl);
// console.log("after splicing");
// console.log(ppl.splice(0,2));




// var a = 2; b=3;
// var c=a+b;
// for(var i=0; i<=5; i++){
//     console.log("sagar");
// }
// for(var i=0; i<=5; i++){
//     console.log(c);
// }



// var nums = [1, 2, 3, 4, 5, 6];
// for(var i=0; i<nums.length; i++){
//     console.log(nums[i]);
// }



// var i = 0;
// while(i<5){
//     console.log("sagar");
//     i++;
// }



// function Name(){
//     var a = 10;
//     var b = 20;
//     var c = a + b;
//     console.log(c);
// }
// Name();
// Name();
// Name();


// function addition(a, b){
//     var total = a +b;
//     console.log(total);
// }
// addition(5, 2);
// addition(2, 3);
// addition(3, 5);




// function addition(a, b, c){
//     var ttl = a + b;
//     var sub = a - c;
//     console.log(ttl, sub);
// }

// addition(5, 2 ,3);



// function multiplication(a){
//     var mul = a * 5;
//     return mul;
// }
// var a = multiplication(5);
// var b = multiplication(6);
// console.log(a);
// console.log(b);
// console.log(a+b);
// console.log(a/b);




// var myInfo = {name:"sagar", village:"dashkahania", post: "ekterpur"};
// console.log(myInfo.name);
// var newProperty =  myInfo["post"];
// console.log(newProperty);



// function MyInfo(name, village, post){
//     this.name = name;
//     this.village = village;
//     this.post = post;
// }
// var newObject = new MyInfo("sagar", "dashkahania", "ekterpur hat");
// console.log(newObject);
// console.log(newObject.name);





// function MyInfo(name, village, post){
//     this.name = name;
//     this.village = village;
//     this.post = post;

//     this.showMe = function(){
//         console.log(this.name);
//         console.log(this.village);
//         console.log(this.post);
//     }
// }
// var newObject = new MyInfo("sagar", "dashkahania", "ekterpur hat");
// var newObject1 = new MyInfo("shiku",  "iswardi", "janipur");
// var newObject2 = new MyInfo("kisor", "janipujr", "nagorpara");
// newObject.showMe();
// console.log("------")
// newObject1.showMe();
// console.log("------")
// newObject2.showMe();




// //tis is example of ternary or conditional operator
// //it is only applicable for two (true or false)
// var num = 50;
// var condition = (num < 10) ? "given number is less than 10" : "given number is greater than 10";
// console.log(condition);




// //continue and break statement
// //break statement
//  for (var i=0; i<=10; i++){
//      if(i == 5){
//          console.log("break now");
//          break;
//      }
//      console.log(i);
//  }



// //continue statement
// for(var i=0; i<=10; i++){
//     if(i==5){
//         console.log("continue");
//         //break;
//         continue;
//     }
//     console.log(i);
// }



////var, let, const
// 3 tar kaj e ek, variable declear kora
//kaj onushare ekek somoy ekekta boshbe
// re-assign korte hole 'let' dite hobe
// re-decleat korte hole 'var' dite hobe
// re-assign ba re declear konotai na korte chaile constance use korte hoobe




// //js scopes

// //global scope
// var myName = "sagar biswas";
// console.log(myName);

// function me(){
//     console.log(myName);
// }
// me(); //function calling



// //local scope
// function me(){
//     var num = "im 99";
//     console.log(num);
// }
// me();


// //block scope
// {
//     let tumi = "tomar name ki?";
//     console.log(tumi);
// }




//js hoisting V.V.V.I
//read it and practice it















