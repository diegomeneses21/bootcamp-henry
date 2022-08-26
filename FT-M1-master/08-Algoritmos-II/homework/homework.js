'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Recursion <---- 
  if (array.length <= 1) return array;
  let pivote = array.length - 1;
  let left = [];
  let rigth = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== pivote) {
      if (array[i] < array[pivote]) {
        left.push(array[i]);
      } else {
        rigth.push(array[i]);
      }
    }
  }
  const result = quickSort(left).concat(array[pivote]).concat(quickSort.rigth);
  return result;
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  // Recursion
  if (array.length <= 1) return array;
  let mediumArray = Math.floor(array.length / 2);
  let left = array.slice(0, mediumArray);
  let rigth = array.slice(mediumArray);
  return merge(mergeSort(left), mergeSort(rigth));

}
function merge(left, rigth) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < rigth.length) {
    if (left[indexLeft] < rigth[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(rigth[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(rigth.slice(indexRight));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
