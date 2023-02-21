// MINIMO

// function minimo(a,b) {
//     if (a<b) return a;
//     else return b;
// }

// console.log("El número mínimo es " + minimo(4,6))
// console.log("El número mínimo es " + minimo(64,8))

//EsPar - USO DE RECURSION (función llama a otra función)

// function esPar(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return esPar(-n);
//   else return esPar(n - 2);
// }

// console.log(esPar(6));
// console.log(esPar(9));
// console.log(esPar(-6));
// console.log(esPar(-9));

//CONTEO DE CARACTERES

// function countChar(string, ch) {
//   let contador = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == ch) {
//       contador += 1;
//     }
//   }
//   return contador;
// }

// console.log(countChar("Estrofa", "f"));

// function countChar(string, ch) {
//   let counted = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == ch) {
//       counted += 1;
//     }
//   }
//   return counted;
// }

// function countBs(string) {
//   return countChar(string, "B");
// }

// console.log(countBs("BBC"));
