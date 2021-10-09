const perguntas = [{
  pergunta:"Sexo: ",
  a: "Eu gosto",
  b: "Ili, Dili",
  correta: "a"
},{
  pergunta: "Idade da terra: ",
  a: "4,243 × 5^9",
  b: "4,543 × 10^9",
  correta: "b"
},{
  pergunta: "Onde mora: ",
  a: "Na minha casa",
  b: "No seu coração",
  correta: "b"
},{
  pergunta: "Onde irá morrer? ",
  a: "Não sei",
  b: "Em casa",
  correta: "a"
}]


const btn = document.getElementById("submit");
const ques = document.getElementById("q");
const in_a = document.getElementById("a");
const in_b = document.getElementById("b");
const l_a = document.getElementById("l_a");
const l_b = document.getElementById("l_b");
const inputs = [in_a, in_b];
const a = "a";
let score = 0;
let next = 0;
let at = 0;

init();
console.log(inputs);
//Funções
btn.addEventListener("click",function(){
if(next < perguntas.length){
  controler();
  load();
} else{
  alert("Concluiu o Quizz. Você fez: " + score + " pontos!");
}
next++
});//Fim Função


function load(){
  quesAt = perguntas[at];
  ques.innerHTML = quesAt.pergunta;
  l_a.innerHTML = quesAt.a;
  l_b.innerHTML = quesAt.b;
  //Reset
  in_a.style.display = "flex";
  in_b.style.display = "flex";
  btn.innerHTML = "Próxima"
  console.log("Valor score: " +score ,"Valor At: " + at)
}//Fim Função

function controler(){
  quesAt = perguntas[at];
  if(in_a.checked && in_a.value == quesAt.correta){
    score++;
    at++;
  }

  if(in_a.checked && in_a.value != quesAt.correta){
    at++;
  }


  if(in_b.checked && in_b.value == quesAt.correta){
    score++;
    at++
  }

  if(in_b.checked && in_b.value != quesAt.correta){
    at++;
  }


}//Fim Função


function init(){
  ques.innerHTML = "Vamos começar!"
  l_a.innerHTML = "";
  l_b.innerHTML = "";
  in_a.style.display = "none";
  in_b.style.display = "none";
  btn.innerHTML = "Vamos lá!"
}

function end(){
  ques.innerHTML = "Você completou!"
  l_a.innerHTML = "";
  l_b.innerHTML = "";
  in_a.style.display = "none";
  in_b.style.display = "none";
  btn.innerHTML = "Vamos lá!"
}
