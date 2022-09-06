"use strict";

// Closures

function counter() {
  /*
  Ejercicio 1

  La función counter debe retornar otra función. Esta función retornada debe actuar como un contador, retornando un valor numérico que empieza en 1 e incrementa con cada invocación.

  Ejemplo:
  const nuevoContador = counter()
  nuevoContador()     // 1
  nuevoContador()     // 2
  nuevoContador()     // 3

  const otroContador = counter()
  otroContador()      // 1
  otroContador()      // 2
  otroContador()      // 3
   */

  let contador = 0;
  return function () {
    contador++;
    console.log(contador);
    return contador;
  }

}
const nuevoContador = counter();
nuevoContador();
nuevoContador();
nuevoContador();

const otroContador = counter()
otroContador();     // 1
otroContador();     // 2
otroContador();     // 3

function cacheFunction(cb) {
  /*
  Ejercicio 2

  Tu tarea aquí es lograr, mediante un closure, que cacheFunction actúe como una memoria caché para el callback que recibe por parámetro (cb); es decir, que "recuerde" el resultado de cada operación que hace, de manera que, al realizar una operación por segunda vez, se pueda obtener el resultado de esa "memoria" sin tener que efectuar otra vez cálculos que ya se hicieron anteriormente.

  cacheFunction debe retornar una función. Esta función debe aceptar un argumento (arg) e invocar a cb con ese argumento; hecho eso, debe guardar el argumento junto con el resultado de la invocación (tip: usá un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocación a cb) de manera que, la próxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estará guardado en la "memoria caché".


  Ejemplo:
  function square(n){
    return n * n
  }

  const squareCache = cacheFunction(square)

  squareCache(5)    // invocará a square(5), almacenará el resultado y lo retornará
  squareCache(5)    // no volverá a invocar a square, simplemente buscará en la caché cuál es el resultado de square(5) y lo retornará (tip: si usaste un objeto, podés usar hasOwnProperty) 

  */

  // cacheFunction de retornar una funcion. Esta funcion debe aceptar un argumento (arg)
  // return function (arg) {
  //   let cache = {};
  //   // e invocar a cb con ese argumento 
  //   cb(arg);
  //   // debe guardar el argumento junto con el resultado de la invocacion (tip: usa un objeto donde cada propiedad sea el argumento, y su valor el resultado de la correspondiente invocacion a cb)
  //   if (cache.hasOwnProperty(arg)) {
  //     // de manera que, la proxima vez que reciba el mismo argumento, no sea necesario volver a invocar a cb, porque el resultado estara guardado en la memoria cache
  //     return cache[arg];
  //   } else {
  //     cache[arg] = cb(arg);
  //     return cache[arg];
  //   }
  // }

  var cache = {
    // 2: 4,
    // 3: 6
  };
  return function (num) {
    if (!cache.hasOwnProperty(num)) {
      cache[num] = cb(num);
      console.log("cache memory is ", cache);
      console.log("no la tiene y la agregamos")
    }
    console.log(cache[num]);
    return cache[num];
  }

}
function square(n) {
  return n * n
};
var squareCache = cacheFunction(square);
squareCache(5);
console.log(squareCache(10));
squareCache(5);

// Bind

var instructor = {
  nombre: "Franco",
  edad: 25,
  // getNombre: function (){
  //   return this.nombre
  // }
};

var alumno = {
  nombre: "Juan",
  curso: "FullStack",
};

function getNombre() {
  return this.nombre;
}

/*
  Ejercicio 3

  IMPORTANTE: no modificar el código de arriba (variables instructor y alumno, y función getNombre)

  Usando el método bind() guardar, en las dos variables declaradas a continuación, dos funciones que actúen como getNombre pero retornen el nombre del instructor y del alumno, respectivamente.
*/

// var getNombreInstructor = getNombre.bind(instructor); 
// var getNombreAlumno = getNombre.bind(alumno); 
// console.log(getNombreInstructor())
// console.log(getNombreAlumno())

let getNombreInstructor = getNombre.bind(instructor);
let getNombreAlumno = getNombre.bind(alumno);

/*
  Ejercicio 4
  
  Sin modificar la función crearCadena, usar bind para guardar, en las tres variables declaradas a continuación, tres funciones que retornen una cadena (string) y el delimitador especificado (asteriscos, guiones, y guiones bajos, respectivamente). Las funciones obtenidas deberían recibir solamente un argumento - la cadena de texto - ya que los otros argumentos habrán sido "bindeados". 
*/

function crearCadena(delimitadorIzquierda, delimitadorDerecha, cadena) {
  return delimitadorIzquierda + cadena + delimitadorDerecha;
}

console.log(crearCadena("*", "*", "Hola"))

// let textoAsteriscos = crearCadena.bind(this.cadena, "*", "*");
// console.log(textoAsteriscos("Hola"))
// let textoGuiones = crearCadena.bind(this.cadena, "-", "-")
// console.log(textoGuiones("Hola"));
// let textoUnderscore = crearCadena.bind(this.cadena, "_", "_")
// console.log(textoUnderscore("Hola"));

// let textoAsteriscos = crearCadena.bind(this,"*","*");
// let textoGuiones = crearCadena.bind(this,"-","-");
// let textoUnderscore = crearCadena.bind(this,"_","_"); 

let textoAsteriscos = crearCadena.bind(null,"*","*");
let textoGuiones = crearCadena.bind(null,"-","-");
let textoUnderscore = crearCadena.bind(null,"_","_"); 

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  counter,
  cacheFunction,
  getNombreInstructor,
  getNombreAlumno,
  textoAsteriscos,
  textoGuiones,
  textoUnderscore,
};
