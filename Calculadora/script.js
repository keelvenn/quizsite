let visor = document.getElementById("visor");
let mult = document.getElementById("mult");
let adic = document.getElementById("adi");
let div = document.getElementById("div");
let equal = document.getElementById("equal");


function limpar(){
  visor.innerHTML = "";
}

function nums(num){
numero = visor.innerHTML;
if(numero.length < 5){
  visor.innerHTML = numero + num;
}else{
  numero = "error";
}


};

function somar(){
  numero = visor.innerHTML;
  visor.innerHTML = eval(numero);
}


mult.addEventListener("click",function(){
  numero = visor.innerHTML;
  visor.innerHTML = numero + "*";
});

div.addEventListener("click",function(){
  numero = visor.innerHTML;
  visor.innerHTML = numero + "/";
});

sub.addEventListener("click",function(){
  numero = visor.innerHTML;
  visor.innerHTML = numero + "-";
});

adic.addEventListener("click",function(){
  numero = visor.innerHTML;
  visor.innerHTML = numero + "+";
});
