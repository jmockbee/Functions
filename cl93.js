// function multiplyBy(num) {
// 	return function(x) {
// 		return x * num;
// 	};
// }
// const triple = multiplyBy(3);
// const double = multiplyBy(2);



function makeBetweenFunc(x,y) {
    return function (num){
        return num >= x && num <= y;    
    
    }
}


const isChild = makeBetweenFunc(0,18);