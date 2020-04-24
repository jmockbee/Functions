 function grumpus () {
    alert ("goo away")
}

//setTimeout(grumpus ,5000);

// setTimeout(function(){
//     alert ("goo away")
// }, 3000);


// anonymous function only used once 

const btn= document.querySelector('button');

btn.addEventListener('click', function () {
    alert("why did you click me ")
})


