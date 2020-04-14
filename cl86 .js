function getCards() {
     const values =['A', '2', '3','4', '5', '6', '7', '8',
'9','10','J','Q', 'K'];

const  valIdx = Math.floor(Math.random() * values.length);
const value =  values[valIdx];

const suits = ['clubs', 'spades', 'diamonds', 'hearts'];
const suitIdx = Math.floor(Math.random() * values.length);
const  suit = suits[suitIdx]
return {value:value,suit:suit}
}