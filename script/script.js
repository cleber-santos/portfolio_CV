let menuToggle = document.querySelector('.toggle')
let navigation = document.querySelector('.navigation')
let sec = document.querySelector('.sec')

menuToggle.onclick = function () {
  menuToggle.classList.toggle('active')
  navigation.classList.toggle('active')
  sec.classList.toggle('active')
}

function enviar() {
  var nome = document.getElementById('nomeid')
  var sobrenome = document.getElementById('sobrenomeid')

  if (nome.value != '') {
    alert(
      'Obrigado sr(a) ' +
        nome.value +
        ' ' +
        sobrenome.value +
        ' por testar esse form, mas infelizmente esse é apenas um treino para construção de um formulário. Ficarei muito feliz em poder entrar em contato com você em meu Linkedin ou Github. Ou se preferir pode me enviar um e-mail clicando no ícone no rodapé desta página. Tenha um ótimo dia!'
    )
  }
}
