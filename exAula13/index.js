//digitar o nome completo
//document.body.innerHTML +=
//o seu nome é\n
//Seu nome tem {} letras\n
//a segunda letra do seu nome é: \n
//qual o primeior indice da letra a no seu nome?
//qual o ultimo indice da letra a no seu nome
//as ultimas 3 letras do seu nome sao:
//as palavras do seu nome sao:
//seu nome com letras maiusculas
//seu nome com letras minusculas

let nome = prompt("Digite seu nome completo: ");

document.body.innerHTML += `Seu nome é: ${nome} <br />`;
document.body.innerHTML += `Seu nome tem: ${nome.replace(' ', '').length} letras <br />`;
document.body.innerHTML += `A segunda letra do seu nome é: ${nome.charAt(0)} <br />`;
document.body.innerHTML += `O primeiro indice da letra A no seu nome é: ${nome.indexOf("a")} <br />`;
document.body.innerHTML += `O ultimo indice da letra A no seu nome é: ${nome.lastIndexOf("a")} <br />`;
document.body.innerHTML += `As ultimas três letras do seu nome são: ${nome.slice(nome.length-3, nome.length)} <br />`;
document.body.innerHTML += `As palavras do seu nome são: ${nome.split(' ')} <br />`;
document.body.innerHTML += `Seu nome com letras maiusculas: ${nome.toUpperCase()} <br />`;
document.body.innerHTML += `Seu nome com letras minusculas: ${nome.toLocaleLowerCase()} <br />`;