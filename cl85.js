function isPangram (sentence ) {
   let lowerCased = sentence.toLowerCase();
for (let char of 'abcdefghijklmnopqrstuvwxyz') {

if (lowerCased.index.of(char) === -1)
return false;
}
return true;
}