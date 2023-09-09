const n1 = document.querySelector("#n1");
const n2 = document.querySelector("#n2");
let result = document.querySelector("#result");
const calcular = document.querySelector("#btnCalcular");

/* Instancia as variáveis */
let add = document.querySelector("#add");
let sub = document.querySelector("#sub");
let div = document.querySelector("#div");
let mult = document.querySelector("#mult");

/* Variáveis checadoras de click */
let addCheck = false;
let subCheck = false;
let divCheck = false;
let multCheck = false;

/* Eventos ao clicar */
add.addEventListener("click",clickAdd);
sub.addEventListener("click",clickSub);
div.addEventListener("click",clickDiv);
mult.addEventListener("click",clickMult);

/* Funções para modificar as variáveis checadoras de click*/
function clickAdd(){
    addCheck = true;
}
function clickSub(){
    subCheck = true;
}
function clickDiv(){
    divCheck = true;
}
function clickMult(){
    multCheck = true;
}

calcular.addEventListener("click",calc);

/* Cria a função de calcular e analisar a operação selecionada */
function calc(){
    
    if (n1.value === "" || n2.value === ""){ // Verifica se há espaços em branco.
        result.innerHTML = "Você não digitou um número, tente novamente!";
        setTimeout(()=>{ //Determina um tempo para executar algo.
            result.innerHTML="";
        },3000);
    }
    
    else{
        const valor1 = parseInt(n1.value); //casting para o tipo inteiro
        const valor2 = parseInt(n2.value);

        /* Analisa cada condição se verdadeira */
        if (addCheck){
            result.innerHTML = valor1 + valor2;
        }
        if (subCheck){
            result.innerHTML = valor1 - valor2;
        }
        if (divCheck){
            result.innerHTML = valor1 / valor2;
        }
        if (multCheck){
            result.innerHTML = valor1 * valor2;
        }
    }
}
