"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head = null;
  this._length = 0;
}

function Node(value) {
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add = function (value) {
  var newNodo = new Node(value);  // Node { value: 87, next: null}
  if (this.head === null) {  // LinkedList { head: null, _length: 0}
    this.head = newNodo;  // LinkedList {head: Node { value: 87, next: null}, _length: 1}
  } else {
    let current = this.head;
    //      this.head.next
    while (current.next != null) { // //   this.head.next.next
      current = current.next;
      //   current = this.head.next
    }
    current.next = newNodo;
  }
  this._length++;
  return newNodo;
}

LinkedList.prototype.remove = function () {
  let current = this.head;
  if (current === null) {
    return null;
  } else if (current.next === null) {
    this.head = null;
    this._length--;
    return current.value;
  } else {
    while (current.next.next !== null) {
      current = current.next;
    }
    const value = current.next.value;
    current.next = null;
    this._length--;
    return value;
  }
}

LinkedList.prototype.search = function (value) { // value = value o function 
  if (this._length === 0) {
    return null;
  }
  let current = this.head;
  if (typeof value === 'function') {
    // function (nodeValue) {return nodeValue === 'two}
    while (current) {
      if (value(current.value)) {
        return current.value;
      }
      current = current.next;
    }
  } else {
    while (current) {
      if (current.value === value) {
        return current.value;
      }
      current = current.next;
    }
  }
  return null;
}

const nodePrueba = new Node(5040);
console.log(nodePrueba);

var lista01 = new LinkedList();
lista01.add(101);
lista01.add(55);
lista01.add('two');
lista01.add(345);
lista01.remove();
console.log(lista01);
console.log(JSON.stringify(lista01));
console.log(lista01.search('two'));

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable(key) {
  this.buckets = [];
  this.numBuckets = 35;
}

HashTable.prototype.hash = function (key) {
  var result = 0;
  for (let i = 0; i < key.length; i++) {
    result = result + key.charCodeAt(i);
  }
  return result % this.numBuckets;
}

HashTable.prototype.set = function (key, value) {
  if (typeof key !== 'string') throw TypeError('Keys must be strings');
  let i = this.hash(key);
  if (this.buckets[i] === undefined) {
    this.buckets[i] = {};
  }
  this.buckets[i][key] = value;
}

HashTable.prototype.get = function (key) {
  let i = this.hash(key);
  if(this.buckets[i][key]){
    return this.buckets[i][key];
  }
}

HashTable.prototype.hasKey =  function (key) {
  let i = this.hash(key);
  if( buckets[i][key]){
    return true;
  }else{
    return false;
  }
}

const hashtable1 = new HashTable();
hashtable1.set("a",1);
hashtable1.set("b",2);
hashtable1.set("c",3);
console.log(hashtable1);
console.log(hashtable1.get(1))


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
