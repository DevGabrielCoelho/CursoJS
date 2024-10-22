function jsApp (){
  const h2 = document.querySelector(".dataHora");
  const hora = new Date();
  const minutos = hora.getMinutes();
  const horaFormatada = `${
    (hora.getDay() == 0 && "Domingo") ||
    (hora.getDay() == 1 && "Segunda-Feira") ||
    (hora.getDay() == 2 && "Terça-Feira") ||
    (hora.getDay() == 3 && "Quarta-Feira") ||
    (hora.getDay() == 4 && "Quinta-Feira") ||
    (hora.getDay() == 5 && "Sexta-Feira") ||
    (hora.getDay() == 6 && "Sábado")
  }, ${hora.getDate()} de ${
    (hora.getMonth() == 0 && "Janeiro") ||
    (hora.getMonth() == 1 && "Fevereiro") ||
    (hora.getMonth() == 2 && "Março") ||
    (hora.getMonth() == 3 && "Abril") ||
    (hora.getMonth() == 4 && "Maio") ||
    (hora.getMonth() == 5 && "Junho") ||
    (hora.getMonth() == 6 && "Julho") ||
    (hora.getMonth() == 7 && "Agosto") ||
    (hora.getMonth() == 8 && "Setembro") ||
    (hora.getMonth() == 9 && "Outubro") ||
    (hora.getMonth() == 10 && "Novembro") ||
    (hora.getMonth() == 11 && "Dezembro")
  } de ${hora.getFullYear()}<br/>${hora.getHours()}:${minutos > 9 ? minutos : 
    (`0` + minutos.toString())}`;
  h2.innerHTML = horaFormatada + `<br/>`;
}


jsApp();