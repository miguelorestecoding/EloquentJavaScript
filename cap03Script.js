// MINIMO

// function minimo(a,b) {
//     if (a<b) return a;
//     else return b;
// }

// console.log("El número mínimo es " + minimo(4,6))
// console.log("El número mínimo es " + minimo(64,8))


//Recursión

function esPar(n) {
    if (n == 0) return true;
    if (n== 1) return false;
    if (n > 1) return esPar(n - 2);
    if (n < 0) return esPar(n+2);
}

console.log(esPar(6))
console.log(esPar(9))
console.log(esPar(-6))
console.log(esPar(-9))


