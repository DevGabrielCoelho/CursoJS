let n = Number(prompt("Digite um número: "));

document.body.innerHTML += `<h2><b>Seu número é ${n}</b></h2></br>`;

document.body.innerHTML += `Raiz quadrada: ${Math.sqrt(n)} </br>`;
document.body.innerHTML += `${n} é inteiro: ${Number.isInteger(n)} </br>`;
document.body.innerHTML += `É NaN: ${Number.isNaN(n)} </br>`;
document.body.innerHTML += `Arredondando para baixo: ${Math.floor(n)} </br>`;
document.body.innerHTML += `Arredondando para cima: ${Math.ceil(n)} </br>`;
document.body.innerHTML += `Com duas casas decimais: ${n.toFixed(2)} </br>`;