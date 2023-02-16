//#
// for (let n = "#" ; n.length < 7 ; n += "#") {
//     console.log(n)
// }

//FIZZ BUZZ
// for (n = 1; n <=100; n++) {
//     let output = ""
//     if (n % 3 == 0) {output += "Fizz"}
//     if (n % 5 == 0) {output += "Buzz"}
//     output = (output|| n)
//     console.log(output)
// }

// for (let n = 1; n <= 100; n++) {
//     let output = "";
//     if (n % 3 == 0) output += "Fizz";
//     if (n % 5 == 0) output += "Buzz";
//     console.log(output || n);
//   }

Board
let size = 8
let board = ""
for (y =  0; y < size; y++) {
for (x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {board += " "}
    else {board += "#"}
}
board += "\n"
}
