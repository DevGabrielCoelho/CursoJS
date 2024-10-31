const frutas = ['Pera', 'Maçã', 'Uva'];

for (let i = 0; frutas.length > i; i++){
  console.log(frutas[i]);
}

for (let i in frutas){
  console.log(frutas[i]);
}

const pessoa = {
  nome: "Luiz",
  sobre: "otavio",
  idade: 30
}

for (let i in pessoa){
  console.log(pessoa[i]);
}