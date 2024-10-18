let nome = "Gabriel";
let idade = 19;
let alturaCm = 168;
let pesoKg = 64;
const IMC = pesoKg/(alturaCm/100)**2;
let anoNascimento = 2024 - idade;

console.log(
    nome, "tem " + idade + "anos, pesa " + pesoKg + "Kg\n" +
    "tem " + alturaCm/100 + "m de altura e seu IMC é de " + IMC + "\n" +
    nome + " nasceu em " + anoNascimento
)

//usando template string

console.log(
    `${nome} tem ${idade} anos, pesa ${pesoKg}Kg\n` +
    `tem ${alturaCm/100}m de altura e seu IMC é de ${IMC}\n` +
    `${nome} nasceu em ${anoNascimento}`
)