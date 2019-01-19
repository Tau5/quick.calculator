module.exports = {
sumar: function (...numeros) {
    if(!numeros) throw new Error("Ingresa 2 o más carácteres numéricos para realizar la operación.");
    let final = 0;
    for(var n of numeros) {
        final += n;
    };
    return final;
},

restar: function(a, b){
    if (isNaN(a) || isNaN(b)) throw new Error("Debes ingresar carácteres numéricos.");
    if (!a || !b) throw new Error("Ingresa 2 carácteres numéricos para realizar la operación.");
return a - b;
},

multiplicar: function(a, b){
    if (isNaN(a) || isNaN(b)) throw new Error("Debes ingresar carácteres numéricos.");
    if (!a || !b) throw new Error("Ingresa 2 carácteres numéricos para realizar la operación.");
return a * b;
},

dividir: function(a, b){
    if (isNaN(a) || isNaN(b)) throw new Error("Debes ingresar carácteres numéricos.");
    if (!a || !b) throw new Error("Ingresa 2 carácteres numéricos para realizar la operación.");
return a / b;
},

randomize: function(a, b){
    let x = 0;
    let y = 0;
    if (isNaN(a) || isNaN(b)) throw new Error("Debes ingresar carácteres numéricos.");
    if (!a || !b) throw new Error("Ingresa 2 carácteres numéricos para realizar la operación.");
    if (a == b) throw new Error("Debes ingresar 2 números diferentes para obtener el resultado aleatorio.")
    if (a > b) x = a;
    if (b > a) x = b;
    if (a < b) y = a;
    if (b < a) y = b;
    return Math.floor(Math.random() * ((x+1) - y)) + y;   
},
porcentuar: function(a, b) {
    if (isNaN(a) || isNaN(b)) throw new Error("Debes ingresar carácteres numéricos.");
    if (!a || !b) throw new Error("Ingresa 2 carácteres numéricos para realizar la operación.");
    if (b <= 0) throw new Error("Debes ingresar un valor del 1 al 100 para realizar la operación.")
    if (b > 100) throw new Error("Debes ingresar un valor del 1 al 100 para realizar la operación.")
    b = (b * 0.1)
    let result = (a * b) * 0.1;
    return result;
},
verificar: function(a) {
    if (!a) throw new Error("Ingresa carácteres numéricos para realizar la operación.");
    if (typeof a === 'number') {
      return a - a === 0;
    }
    if (typeof a === 'string' && a.trim() !== '') {
      return Number.isFinite ? Number.isFinite(+a) : isFinite(+a);
    }
    return false;
},
round: function(a) {
    if (!a) throw new Error("Ingresa carácteres numéricos para realizar la operación.");
    if (isNaN(a)) throw new Error("Debes ingresar carácteres numéricos.");
    return Math.round(a);
},
};