// index         0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [primeiroNumero, segundoNumero, ...resto] = numeros; 

const [um, , tres, , cinco, , sete, ...resto2] = numeros;

//              0          1          2  
const n = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
//           0  1  2    0  1  2    0  1  2

//         [0        1    ]
//         []  [0  1   2 ]
const n2 = [ , [ , , seis]] = n;

//... rest operator
// or
//... spread operator

console.log(primeiroNumero, segundoNumero, resto);
console.log(um, tres, cinco, sete, resto2);
console.log(n[0][1], n[1][2], n[2][0]);
console.log(seis);