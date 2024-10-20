const objPessoa = {
  nome: "Nice",
  sobrenome: "Guy",
  idade: "Todas",

  aoba(){
    console.log("aoba", this.nome, this.sobrenome);
  }
};

function criarPessoa(nome, sobrenome, idade){
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade
  };
}

const objPessoa2 = criarPessoa("Nice", "Guy", "Todas");

objPessoa.aoba();
