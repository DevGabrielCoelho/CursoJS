const conteiner = document.body.querySelector(".conteiner");

const elementos = [
  {tag: "p", texto: "Frase 1"},
  {tag: "div", texto: "Frase 2"},
  {tag: "footer", texto: "Frase 3"},
  {tag: "section", texto: "Frase 4"}
]

// *--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---*

for (let i = 0; i < elementos.length; i++){
  conteiner.innerHTML += 
  `<${elementos[i].tag}> ${elementos[i].texto} </${elementos[i].tag}>`;
}

// *--- --- --- --- --- --- --- --- --- --- --- --- --- --- --- --- ---*

const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++){
  let { tag, texto} = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

conteiner.appendChild(div);