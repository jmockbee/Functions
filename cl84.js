function avg (arr) {
    let total = 0;
for (let num of arr) {
    total += num;
}
// loop over each num 
// add them togethoer 
//dive sum by the number of nums 

    return total/arr.length;

}