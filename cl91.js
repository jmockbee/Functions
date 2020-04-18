function add (x,y) {
    return x+y;

}

const subtract  =function (x,y) {
    return x-y;
}

function multiply  (x,y) {
        return x*y;
}

function divide  (x,y) {
    return x/y;
}


const operations = [add,subtract,multiply,divide];

// how you call 
// operations [2] (100,4)
// 400
// operations [3] (100,4)
// 25

for (let func of operations) {
    let result = func(30,5);
    console.log(result);
}

const thing  = {
    doSomething: multiply 
}

// to call thing.dosomething(50,2)