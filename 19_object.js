console.log("--------------------------")//this is nothing

//object variable er motoi. kintu object a onekgulo information set kora jay

var myInfo = {Name:"sagar biswas", Village:"doshkanonia", Post:"ekterpur hat"};
console.log(myInfo);
console.log(myInfo.Name); //ekhane .name holo myInfo er ekta property
console.log(myInfo.Village);

var newPro = myInfo["Post"];//ei vabeo property access kora jay
console.log(newPro);





// function er vitor object create korle onek subidha paoa jay. jemon 100 jon thakle tader jonno 100 ta object create kora somvob na. tokhon ei kaj korte hoy. etake "CONSTRUCTOR" o bole

function info(Name, Village, Post){
    this.Name = Name; //this diye constructor create korlam
    this.Village = Village;
    this.Post = Post;
}
var NewObj = new info("sagr", "iswardi", "ekterpur");
console.log(NewObj); //full object show korbe
console.log(NewObj.Village); //ekta property access korte hole
var NewObj = new info("aaa", "bbb", "ccc");
console.log(NewObj);
var NewObj = new info("ddd", "eee", "fff");
console.log(NewObj);
var NewObj = new info("ggg", "hhh", "iii");
console.log(NewObj);




console.log("--------------")








//function er vitore function create kore code take aro choto o useful kora jay

function MyInfo(name, village, post){
    this.name = name;
    this.village = village;
    this.post = post;

    this.showMe = function(){ //function er vitor property gulake construct kora hoise
        console.log(this.name);
        console.log(this.village);
        console.log(this.post);
    }
}
var newObject = new MyInfo("sagar", "dashkahania", "ekterpur hat");
var newObject1 = new MyInfo("shiku",  "iswardi", "janipur");
var newObject2 = new MyInfo("kisor", "janipujr", "nagorpara");
newObject.showMe();
console.log("------");
newObject1.showMe();
console.log("------");
newObject2.showMe();


