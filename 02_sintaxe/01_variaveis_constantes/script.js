//Comentando em uma linha.
/*
Comentado em 
Mais de uma linha.
*/

/* 
Temos dois tipos de váriaveis 
var:  não respeita escopo.
let:  respeita escopo.
*/


//const: respeita escopo, o seu valor atribuido na declaração.

// Pesquisar sobre palavras reservadas do JavaScript.

//Para declararmos nome de variavel por convenção utilizamos camelCase.
//nomeComposto, tempoTotal. 


const cl = console.log;
const nome5 = 'Eric';   //Constante nome recebe valor (=) Eric, que é uma string(texto)


cl(nome5);

let nome1 = 'Eric02';
cl(nome1)
nome1 = 'EricMudado';
cl(nome1)

let nome2;  //Declarando variavel 
cl(nome2); //undefined 

nome2 = "Kiko"; //Atribuindo valor a varivel
cl(nome2);

let nome = prompt('Qual o seu nome');
cl(nome);

let sobrenome = prompt('Escreva seu sobrenome');
cl(sobrenome);


let nomeC = nome + ' '+ sobrenome;  //Estamos contatenando o código assim imprimindo ele com espaço
cl(nomeC)
