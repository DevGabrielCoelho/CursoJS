function jsApp (){
  const form = document.querySelector(".formulario");
  const resultado = document.querySelector(".resultado")

  form.addEventListener(
    "submit", 
    (evento) => {
      evento.preventDefault();
      resultado.innerHTML = "deu certo";
      const peso = form.querySelector(".peso").value;
      const altura = form.querySelector(".altura").value;
      IMC = parseFloat(peso) / ((parseFloat(altura)/100.0) ** 2.0);
      if (isNaN(IMC)){
        resultado.innerHTML = `<style>
          .resultado{
            background-color: rgb(119, 44, 44);
          }
        </style>
        Valor Invalido! <br />`;
      }
      else{
        const resultIMC = 
          ((IMC > 40.0)                   && "Obesidade grau 3") || 
          ((IMC >= 35.0 && IMC <= 39.9)   && "Obesidade grau 2") ||
          ((IMC >= 30.0 && IMC <= 34.9)   && "Obesidade grau 1") ||
          ((IMC >= 25.0 && IMC <= 29.9)   && "Sobrepeso")        ||
          ((IMC >= 18.5 && IMC <= 24.9)   && "Peso normal")      ||
          ((IMC < 18.5)                   && "Abaixo do peso");

        resultado.innerHTML = `<style>
          .resultado{
            background-color: rgb(47, 88, 47);
          }
        </style>
        Seu IMC é ${IMC.toFixed(2)}(${resultIMC})<br />`;
      }
    }
  );
}

jsApp();