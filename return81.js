
//function add (x,y) {
  //  return x+y;
//}

//function square (x) {
 //   return x*x;
//}

// function isPurple (color) {
//     if (color.toLowerCase() === purple'){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isPurple(color) {
//     return color.toLowerCase() === 'purple';
// }


function containsPurple(arr) {
    for (let color of arr) {
        if (color ==='purple' || color ==='magenta') {
            return true;
        }
        
    }
    return false;
}


[]