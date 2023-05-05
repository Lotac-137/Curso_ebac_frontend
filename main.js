const form = document.querySelector('#meuFormulario');
const campoA = document.querySelector('#campoA');
const campoB = document.querySelector('#campoB');
const resultado = document.querySelector('.resultado');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  resultado.innerHTML = "";

  if (parseInt(campoB.value) > parseInt(campoA.value)) {
    resultado.innerHTML = "Formulário válido!";
    resultado.classList.remove("mensagem-negativa");
    resultado.classList.add("mensagem-positiva");
  } else {
    resultado.innerHTML = "Formulário inválido!";
    resultado.classList.remove("mensagem-positiva");
    resultado.classList.add("mensagem-negativa");
  }
});
