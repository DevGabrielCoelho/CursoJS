let varA = 'A';
let varB = 'B';
let varC = 'C';

let backup = varA;
console.log(varA, varB, varC);

varA = varB;
varB = varC;
varC = backup;

// [varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC);
