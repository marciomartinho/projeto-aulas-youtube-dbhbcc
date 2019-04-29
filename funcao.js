
function funcao() {

};

//uma função pode receber parametros e/ou retornar valores

//funcao também pode ser armazenada em uma variável, ex:
const func2 = function funcao2() {};
//tb em um array
const array = [function func3() {}, funcao, func2];

//funcao retornar uma funcao
function soma (a, b){
  return function (c){
    console.log(a + b + c );
  }
}
soma(1,2)(3);
console.log('teste')

