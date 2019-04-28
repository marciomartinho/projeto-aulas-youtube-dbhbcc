//funções

function escreva(){
  console.log('olá');
}

escreva();//função foi escrita acima e foi chamada aqui

function escreva2(mensagem){
  console.log(mensagem)
}

escreva2('teste');
escreva2('outro teste');//definiu a função com parametros e foi chamando e mudando os parametros

function soma(a, b){
  return a + b;
}

var resultado = soma (19, 1);
console.log(resultado);
var resultado2 = soma (10, 1);
console.log(resultado2);

function somaTudo(numeros){
  var total = 0;
  for (var num of numeros){
    total = total + num;
  }
  return total;
}
console.log(numeros[1,2,3]);

function endereco(rua, cidade, estado, ...complementos){
  console.log(rua);
  console.log(cidade);
  console.log(estado);
  console.log(complementos);
}
endereco('rua A', 'Bsb', 'DF', "apto 1", 'cep 345')
//complementos com "..." recebe um array

function soma2 (a, b, retorno){
  return retorno(a+b);
}
console.log(soma2(1,2, function(total){
  return total + 10;
}))