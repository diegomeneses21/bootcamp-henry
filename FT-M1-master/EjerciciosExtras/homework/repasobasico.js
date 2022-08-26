const array = [1,2,3,4]; 
function sumar (a,b){
    var result = a + b; 
    console.log(result);
    return result; 
}
function quitarElementosDeArray(){
    array.shift();
}
console.log(sumar(2,3));

const slicePract = array.slice(1);
console.log(slicePract);

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

const obj = {
    a: 1,
    b: 2,
}
console.log(obj);
function mmm(obj){
    for (const key in obj) {
        if (key === 'a') {
            obj[key] = 101;
        }
    }
}
mmm(obj);
console.log(obj);

const arrayConMap = array.map((e) => {
    // return e === 3;
    // return Math.pow(e,2);
    if(e>2){
        return e;
    }else{
        return null;
    }
})
console.log("Array con map: ",arrayConMap);

array.forEach(element => {
    
});


// this
console.log(global);

// Objeto y dentro de ese objeto un metodo si usa el this
// ese this apunta a las propiedades de ese obj

const objA = {
    a: 1,
    b: 2,
    c: {
        s: 22,
        cambiar: function(value){
            this.s = value; 
        }
    }
};
console.log(objA);
objA.c.cambiar(544);
console.log(objA);

