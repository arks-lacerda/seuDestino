const elementAnswer = document.querySelector("#resposta")
const inputQuestion = document.querySelector("#inputPergunta")
const buttonQuestion = document.querySelector("#buttonQuestion")
const answers = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// Click on ask question
function askQuestion() {

  if (inputQuestion.value == "") {
    alert("Digite sua pergunta")
    return
  }

  buttonQuestion.setAttribute("disabled", true)

  const question = "<div>" + inputQuestion.value + "</div>";

  // Generate random number
  const totalAnswers = answers.length
  const numberRandom =  Math.floor(Math.random() * totalAnswers)

  elementAnswer.innerHTML = question + answers[numberRandom]

  elementAnswer.style.opacity = 1;
  // Answer disappears after 3 seconds
  setTimeout(function() {
    elementAnswer.style.opacity = 0;
    buttonQuestion.removeAttribute('disabled');
  }, 3000)
}
