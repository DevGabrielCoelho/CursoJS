let vet = ["a", 2, true, null];
console.log(vet);
console.log(vet[0]);

vet[0] = "b";

console.log(vet);
console.log(vet[0]);

vet[vet.length] = "novo elemento";

console.log(vet);

vet.push("outro metodo de add");

console.log(vet);

vet.unshift("Adicionar no começo");

console.log(vet);

vet.pop(); // removendo o ultimo elemento

console.log(vet);

vet.shift() // removendo o primeiro elemento

console.log(vet);

delete vet[1]; // removendo mas deixando vago

console.log(vet);

console.log(vet.slice(2, 5));

console.log(typeof vet);

console.log(vet instanceof Array)

