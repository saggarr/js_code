console.log("-------------------");

//break continue statement

//bresk
for(i = 0; i <= 10; i++){ //normally ei for loop 1-10 porjonto show korbe, kintu....
    if(i==5){ //ei if loop er jonno 1-5 porjonto jeye break debe
        console.log("break now");
        break;
    }
    console.log(i);
}


console.log("-------------------");

//continue
for(var a = 0; a <= 10; a++){
    if(a == 4){
        console.log("continue");
        continue; //ei statement ta 4 ke replace kore console a message ta debe tarpore abar 10 porjonto continue korbe
    }
    console.log(a);
}



