function rolldie () {
    let roll = Math.floor(Math.random()*6) +1;
    console.log (`Rolled: ${roll}`);
}

function throwDice (numbRolls) {
for (let i =0; i < numbRolls; i++) {
    rolldie ();
}

}