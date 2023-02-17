// MINIMO

// function minimo(a,b) {
//     if (a<b) return a;
//     else return b;
// }

// console.log("El número mínimo es " + minimo(4,6))
// console.log("El número mínimo es " + minimo(64,8))

//Recursión

// function esPar(n) {
//   if (n == 0) return true;
//   else if (n == 1) return false;
//   else if (n < 0) return esPar(-n);
//   else return esPar(n + 2);
// }

// console.log(esPar(6));
// console.log(esPar(9));
// console.log(esPar(-6));
// console.log(esPar(-9));

//CONTEO DE FRIJOLES

// function contarFs(string) {
//   for (let i = 0; i < string.lenght; i++) {
//     if (string[i] == "F") return i;
//     break;
//   }
//   console.log(i);
// }

// contarFs("Estrofa");

function countChar(string, ch) {
  let counted = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == ch) {
      counted += 1;
    }
  }
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs("BBC"));
