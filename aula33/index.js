const pessoa = {
  nome: "jao",
  sobrenome: "jao?",
  idade: 30,
  endereco: {
    rua: "busao",
    numero: "320"
  }
};

console.log(pessoa);

//console.log(pessoa.nome);

const nome2 = pessoa.nome;
//console.log(nome2);



const { nome = "", sobrenome, idade} = pessoa;
//console.log(nome);
//console.log(sobrenome);
//console.log(idade);

const { nome: x} = pessoa;
//console.log(x);

const { endereco: {rua: z = 123, numero: y}, endereco } = pessoa;
//console.log(z, y, endereco);

const { nome: sla, ...resto} = pessoa;

console.log(sla, resto);