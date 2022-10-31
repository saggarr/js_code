//
console.log("-------------------");
//

//outer function er j kono jinish inner function a niye jaoa jay
//kintu inner function er j kono jinish outer function a niye jaoa jay na

function world(){
    var Name_1 = "sagar";

    function bangladesh(){ //inner function
        console.log(Name_1);
        let Name_2 = "kanchon";

        console.log(Name_2); //ekhan theka access kora jabe
    }
    bangladesh();//ekhan theke inner function access kora jabe
   // console.log(Name_2);// outer function theke inner function access kora jabe na
}
//bangladesh();//inner function tai baire access neoa jabe na
world();
//bangladesh world er vitor ba baire theke access kora jabe na
//kintu world er jinish bangladesh r baire theke access kora jabe
//karon world outer function ebong bangladesh inner function



//global scope r local scope chapter porte hobe