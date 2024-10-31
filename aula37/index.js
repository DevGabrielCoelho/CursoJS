const nome = "luiz";

const nomes = [
  "luiz", "a", "b"
]

for (let i = 0; i < nome.length; i++){
  console.log(nome[i]);
}

for (let i in nome){
  console.log(nome[i]);
}

for (let i of nome){ // pegando o valor
  console.log(i);
}

nomes.forEach(function(v, i, a){
  console.log(v, i, a);
});