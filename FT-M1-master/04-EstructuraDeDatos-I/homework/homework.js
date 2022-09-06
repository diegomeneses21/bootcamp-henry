'use strict'

const StateBlock = require("markdown-it/lib/rules_block/state_block");

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

// Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

function nFactorial(n) {

  // if (n > -1 && n < 2) {
  //   console.log(n);
  //   return 1;
  // } else if (n < 0) {
  //   console.log(n);
  //   return 0;
  // }
  // console.log(n);
  // return n * nFactorial(n - 1);

  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(nFactorial(4));
// 3! ? --> 6
// 4! --> 24
// ---> n! = n * (n-1)!

function factorialRec(num) {
  // se llama a si misma 
  // condicion de corte
  // en gral el argumento con el cual se llama la fn rec nuevamente es distinto del original 
  if (num < 0) return "No existe el factorial de un numero negativo"
  if (num <= 1) return 1;
  return num * factorialRec(num - 1);
}
console.log(factorialRec(10));

// Ejemplo: 0 , 1 , 1 , 2 , 3 , 5 , 8 , 13 , 21 , 34 , 55

function nFibonacci(n) {
  if ((n == 1) || (n == 2)) {
    return 1;
  }
  if (n === 0) {
    return 0;
  }

  return nFibonacci(n - 1) + nFibonacci(n - 2);
}
console.log(nFibonacci(0));
console.log(nFibonacci(1));
console.log(nFibonacci(2));
console.log(nFibonacci(3));
console.log(nFibonacci(4));
console.log(nFibonacci(5));
console.log(nFibonacci(6));
console.log(nFibonacci(7));
console.log(nFibonacci(8));
console.log(nFibonacci(9));

// ------------------------
// PILA - STACK
function Stack() {
  this.arr = [];
}

let nuevoStack = new Stack();

Stack.prototype.add = function (element) {
  this.arr.push(element);
}

Stack.prototype.remove = function () {
  this.arr.pop();
}

Stack.prototype.longitud = function () {
  return (this.arr.length)
}

nuevoStack.add("first");
nuevoStack.add("second");
console.log(nuevoStack.arr);
nuevoStack.remove();
console.log(nuevoStack.arr);
nuevoStack.longitud();

// array
// herramientas: pop, push,. shif, unshif, length

// Stack 
// herramientas/metodos: agregar, remover
// --------------------------



// --------------------------
/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/

function Queue() {
  this.arr = [];
}

Queue.prototype.enqueue = function (num) {
  this.arr.push(num);
}

Queue.prototype.dequeue = function (num) {
  if (this.arr.length < 1) {
    return undefined;
  } else {
    var i = this.arr.shift();
  }
  console.log(i);
  return i;
}

Queue.prototype.size = function () {
  console.log(this.arr.length);
  return this.arr.length;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue);




// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
