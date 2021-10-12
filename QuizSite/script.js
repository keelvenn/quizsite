const perguntas = [{
  pergunta:"Qual o maior planeta do sistema solar? ",
  a: "Júpiter",
  b: "Sol",
  c: "Lua",
  d: "Terra",
  correta: "a"
},{
  pergunta: "Idade da terra: ",
  a: "4,243 × 5^9",
  b: "4,543 × 10^9",
  c: "4,543 × 10^10",
  d: "4,143 × 10^9",
  correta: "b"
},{
  pergunta: "Qual a estrela mais velha já conhecida? ",
  a: "Matusalém",
  b: "Sua vó",
  c: "Sol",
  d: "Cadente",
  correta: "b"
},{
  pergunta: "Qual o menor planeta do sistema solar ",
  a: "Mercúrio",
  b: "Não sei",
  c: "Não faço idéia",
  d: "Júpiter",
  correta: "a"
}]


const btn = document.getElementById("submit");
const ques = document.getElementById("q");
const in_a = document.getElementById("a");
const in_b = document.getElementById("b");
const in_c = document.getElementById("c");
const in_d = document.getElementById("d");
const l_a = document.getElementById("l_a");
const l_b = document.getElementById("l_b");
const inputs = [in_a, in_b, in_c,in_d];
const a = "a";
let score = 0;
let next = 0;
let at = 0;

init();

//Funções
btn.addEventListener("click",function(){
if(next < perguntas.length){
  controler();
  load();
} else if(next <= perguntas.length){
  controler();
  alert("Concluiu o Quizz. Você fez: " + score + " pontos!");
}
next++
});//Fim Função


function load(){
  quesAt = perguntas[at];
  ques.innerHTML = quesAt.pergunta;
  l_a.innerHTML = quesAt.a;
  l_b.innerHTML = quesAt.b;
  l_c.innerHTML = quesAt.c;
  l_d.innerHTML = quesAt.d;
  //Reset
  in_a.style.display = "flex";
  in_b.style.display = "flex";
  in_c.style.display = "flex";
  in_d.style.display = "flex";
  btn.innerHTML = "Próxima"
  console.log("Valor score: " +score ,"Valor At: " + at)
}//Fim Função

function controler(){
  quesAt = perguntas[at];
  inputs.forEach(function(input){
    if(input.checked && input.value == quesAt.correta){
      score++;
      at++;
    }
  });
}//Fim Função


function init(){
  ques.innerHTML = "Vamos começar!"
  l_a.innerHTML = "";
  l_b.innerHTML = "";
  l_c.innerHTML = "";
  l_d.innerHTML = "";
  in_a.style.display = "none";
  in_b.style.display = "none";
  in_c.style.display = "none";
  in_d.style.display = "none";
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
