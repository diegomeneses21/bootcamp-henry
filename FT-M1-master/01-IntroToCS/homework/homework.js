'use strict'

function BinarioADecimal(string) {
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

  // var decimal = 0;
  // num = num.toString();
  // for (let i = 0; i < num.length; i++) {
  //   console.log(num[i]);
  //   decimal = decimal + num[i] * 2 ** (num.length - 1 - i)
  // }
  // return decimal;

  var result = 0; 
  var count = string.length - 1;
  for (let i = 0; i < string.length; i++) {
    result = result + string[i] * Math.pow(2, count);
    // var lugarPotencia =string.length - 1 
    // console.log("count is: ", count)
    count--
  }
  // console.log("result is: ", result)
  return result;
}
// console.log(BinarioADecimal(1011));


function DecimalABinario(num) {
  // tu codigo aca

  // var n = num;
  // var bin = (n % 2).toString();
  // while (n > 1) {
  //   n = parseInt(n / 2);
  //   bin = (n % 2) + bin;
  // }
  // return bin;

  var result = "";
  var numero = num
  while (numero>0) {
    // console.log("numero es",numero)
    result = numero%2 +result
    numero = Math.floor(numero/2)
  }
  return result
}
// console.log(DecimalABinario(255))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}