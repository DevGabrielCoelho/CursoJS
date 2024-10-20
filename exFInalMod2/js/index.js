function indexEscopo(){
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  form.addEventListener(
    "submit", 
    (evento) => {
      evento.preventDefault();
      pessoas.push({
        nome: form.querySelector('.nome').value,
        sobrenome: form.querySelector('.sobrenome').value,
      })
      resultado.innerHTML += `${pessoas[pessoas.length-1].nome} `+
        `${pessoas[pessoas.length-1].sobrenome} <br />`;
    }
  );
}

indexEscopo();