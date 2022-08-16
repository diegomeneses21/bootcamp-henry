'use strict'

function BinarioADecimal(num) {
  // tu codigo aca

  // let arr = []; 
  // let res = 0;
  // arr.push(num); 
  // arr = arr.join("").split("").reverse();
  // for (let i = 0; i < arr.length; i++){
  //   res += arr[i] * (2 ** i);
  // }
  // return res; 

  // return parseInt(num,2); 

  var decimal = 0;
  num = num.toString();
  for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    decimal = decimal + num[i] * 2 ** (num.length - 1 - i)
  }
  return decimal;
}
// console.log(BinarioADecimal(1011));


function DecimalABinario(num) {
  // tu codigo aca

  var n = num;
  var bin = (n % 2).toString();
  while (n > 1) {
    n = parseInt(n / 2);
    bin = (n % 2) + bin;
  }
  return bin;

}
// console.log(DecimalABinario(255))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}