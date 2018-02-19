var saida = document.getElementById("output");

/* função que cria formato brasileiro de data */

// transformando dados de dias
// em numeros inteiros reconhecíveis
var dia = new Date().getDate();
var ano = new Date().getFullYear();

// dando nomes aos dias da semana
var nomeDia = new Date();
var dias = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]

// dando nomes aos meses do ano
var nomeMes = new Date();
var meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

// nomeando e tornando acessiveis as variaveis
var diaBr = dias[nomeDia.getDay()];
var mesBr = meses[nomeMes.getMonth()];


var mensagem = "Hoje é " + diaBr + ", dia " + dia + " de " + mesBr + " de " + ano + ".";

function dateBr(){

    saida.innerHTML = mensagem;

}

// criando mensagem para header "today" no 'body.html'
var today = document.getElementById("today");

today.innerHTML=mensagem;