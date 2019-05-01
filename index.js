//funções

function escreva() {
  console.log('olá');
}

escreva();//função foi escrita acima e foi chamada aqui

function escreva2(mensagem) {
  console.log(mensagem)
}

escreva2('teste');
escreva2('outro teste');//definiu a função com parametros e foi chamando e mudando os parametros

function soma(a, b) {
  return a + b;
}

var resultado = soma(19, 1);
console.log(resultado);
var resultado2 = soma(10, 1);
console.log(resultado2);

function somaTudo(numeros) {
  var total = 0;
  for (var num of numeros) {
    total = total + num;
  }
  return total;
}
console.log(numeros[1, 2, 3]);

function endereco(rua, cidade, estado, ...complementos) {
  console.log(rua);
  console.log(cidade);
  console.log(estado);
  console.log(complementos);
}
endereco('rua A', 'Bsb', 'DF', "apto 1", 'cep 345')
//complementos com "..." recebe um array

function soma2(a, b, retorno) {
  return retorno(a + b);
}
console.log(soma2(1, 2, function (total) {
  return total + 10;
}))

//objeto
//como se fosse variaveis dentro variavel
var objeto = {
  nome: 'a',
  idade: 5
}
console.log(objeto);
console.log(objeto.idade);//ponto acessa variaveis

objeto.ano = 2019; //consegue add no objeto
console.log(objeto);

delete objeto.ano;//deleta
console.log(objeto);

//objeto com funcoes
var objeto2 = {
  funcao: function (nome) {
    return `Olá ${nome}`
  }
}

console.log(objeto2.funcao('marcio'));
//outra forma
var objeto2 = {
  funcao(nome) {
    return `Olá ${nome}`
  }
}

console.log(objeto2.funcao('marcio'));

//juntar objetos
var teste1 = {
  nome: "a",
  idade: 16
}

var teste2 = {
  escola: 'estadual',
  turma: 'b'
}

var novo = Object.assign({}, teste1, teste2);
console.log(novo);
//outra forma até mais simples
var novo2 = {
  ...teste1,
  ...teste2
}
console.log(novo2);

//novo jeito pegar variaveis JS
var novoUsuario = {
  nome: 'marcio',
  idade: 39,
  pais: 'Brasil'
}
var { nome } = novoUsuario; //colocar entre chaves
console.log(nome);
console.log(novoUsuario);
var { nome: primeironome } = novoUsuario; //trocar o nome da variável colocar com :
console.log(primeironome);

//também vale para objetos dentro de objetos
var novoUsuario2 = {
  nome: {
    primeiro: 'marcio',
    ultimo: 'martinho',
    meio: 'rezende'
  }
}
console.log(novoUsuario2);
console.log(novoUsuario2.nome);
console.log(novoUsuario2.nome.primeiro);
var { nome: { primeiro } } = novoUsuario2;//aqui extrai a variável primeiro de dentro do objeto do objeto
console.log(nome);
var { nome: { primeiro: mudeiNome } } = novoUsuario2;//mesma lógica para mudar nome variavel
console.log(mudeiNome);

function soma (a, b){
  return function (c){
    console.log(a + b + c );
  }
}
soma(1,2)(3);
console.log('teste')

function isEmpty(s) {
	if (s === ""){
		console.log('true')
	} else {
		console.log('false')
	}
}

isEmpty("")

function somaX(a = 3 ,b,c = 4){
  return a + b + c;
}

