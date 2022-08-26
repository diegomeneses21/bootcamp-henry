"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null
}

// const treeTest1 = new BinarySearchTree(20) //{ value:20, left:null, right:null }
// treeTest1.insert(15) //treeTest1.insert(25)... 
// treeTest1.size()
/*
BinarySearchTree{ value:20, 
                  left: { value: 15,
                          left: { value: 2,
                                  left: null,
                                  right:null 
                          }
                          right: { value: 16,
                                  left: null,
                                  right:null 
                          }
                   } 
                  right: {
                          value: 25
                          left: null,
                          right:null
                  } 
                }
*/

BinarySearchTree.prototype.size = function () {
  if (this.left === null && !this.right) return 1;
  if (!this.left) return 1 + this.right.size();
  if (!this.right) return 1 + this.left.size();
  if (this.left && this.right) return 1 + this.left.size() + this.right.size();
}

/*
const treeTest88 = new BinarySearchTree(20)
treeTest88 --> { value:20, left:null, right:null }
treeTest88.insert(15) --> this.left = new BinarySearchTree(15)
{ value:20, left:{ value:15, left:null, right:null }, right:null }
treeTest88.insert(25) --> this.right = new BinarySearchTree(25)
{ value:20, left:{ value:15, left:null, right:null }, right:{ value:25, left:null, right:null } }
treeTest88.insert(10) -- > this.left.insert(10)
  en este subarbol { value:15, left:null, right:null } 
  --> this.left = new BinarySearchTree(10)
  este subarbol { value:15, left:{ value:10, left:null, right:null }, right:null } 

  resultado final del arbol padre
  { value:20, left:{ value:15, left:{ value:10, left:null, right:null }, right:null }, right:null }, right:{ value:25, left:null, right:null } }
*/

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value)
    } else {
      this.right.insert(value)
    }
  } else {
    if (!this.left) {
      this.left = new BinarySearchTree(value)
    } else {
      this.left.insert(value)
    }
  }
};

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true
  if (value > this.value) {
    if (!this.right) {
      return false
    } else {
      return this.right.contains(value)
    }
  } else {
    if (!this.left) {
      return false
    } else {
      return this.left.contains(value)
    }
  }

}

// cb = function(val){ arrayPrueba.push(val); }
// const arrayResult = []
// "in-order"   L V R

BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  if (!order || order === "in-order") {
    this.left && this.left.depthFirstForEach(cb, order)
    cb(this.value)
    this.right && this.right.depthFirstForEach(cb, order)
  } else if (order === "post-order") {
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
    cb(this.value)
  } else { // "pre-order"
    cb(this.value)
    this.left && this.left.depthFirstForEach(cb, order)
    this.right && this.right.depthFirstForEach(cb, order)
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  if (this.left) {
    array.push(this.left)
  }
  if (this.right) {
    array.push(this.right)
  }
  cb(this.value)
  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};

// function persona(nombre="jose"){
//   return nombre
// }
// persona()
/*
// cb = function(val){ arrayPrueba.push(val); }
const arrayResult = []
BinarySearchTree.prototype.depthFirstForEach = function(order){
  if (!order || "in-order"){
    this.left && this.left.depthFirstForEach(order)
    arrayResult.push(this.value)
    this.right && this.right.depthFirstForEach(order)
  }
}
*/

/*


function TreeB(value) {
  this.root = value;
  this.left = null;
  this.right = null
}

function Node(value) {
  // value= 87
  this.value = value;
  this.left = null;
  this.right = null
}
const arbolito = new TreeB({id:"root",data:[]})

const nodeTree1 = new Node ({id:1,data:[]})
const nodeTree2 = new Node ({id:2,data:[]})
const nodeTree3 = new Node ({id:3,data:[]})
const nodeTree4 = new Node ({id:4,data:[]})

console.log(arbolito)

arbolito.left= nodeTree1
console.log(arbolito)
arbolito.right= nodeTree2
console.log(arbolito)
arbolito.left.left= nodeTree3
arbolito.left.right= nodeTree4
console.log(arbolito)
console.log(JSON.stringify(arbolito))


// TreeB {
//   root: { id: 'root', data: [] },
//   left: Node {
//     value: { id: 1, data: [] },
//     left: Node { value: [Object], left: null, right: null },
//     right: Node { value: [Object], left: null, right: null }
//   },
//   right: Node { value: { id: 2, data: [] }, left: null, right: null }
// }
// {"root":{"id":"root","data":[]},"left":{"value":{"id":1,"data":[]},
// "left":{"value":{"id":3,"data":[]},"left":null,"right":null},
// "right":{"value":{"id":4,"data":[]},"left":null,"right":null}},
// "right":{"value":{"id":2,"data":[]},"left":null,"right":null}}


function TreeB(value) {
  this.value = value;
  this.left = null;
  this.right = null
}
TreeB.prototype.recorre = function(str){
if(str==="in-order")
return this.recorre()
function otraRecursiva(){

}
en determinado momento si pasa tal cosa return otraRecursiva(con tal data)
}

*/









//const data = [8,10,3,4,7,13,1,]


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
