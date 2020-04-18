k
// function callThreeTimes(f)  {
//     f();
//     f ();
//     f ();
// }

function  cry () {
  console.log ("boohoo");
}


// in the console log 
//callThreeTimes(cry)


function  repeatNTimes (action , num) {
    for (let i = 0 ; i < num; i++) {
        action ();
    }

}

// repeatNTimes (cry,12);


function pickOne (f1,f2) {
    let rand =Math.random ();
    if (rand< .5 ){
        f1();
        

        }
        else {
            f2();
        }
    }
}