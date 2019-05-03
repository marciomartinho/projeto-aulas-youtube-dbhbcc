
function funcao() {

};

//uma função pode receber parametros e/ou retornar valores

//funcao também pode ser armazenada em uma variável, ex:
const func2 = function funcao2() { };
//tb em um array
const array = [function func3() { }, funcao, func2];

//funcao retornar uma funcao
function soma(a, b) {
  return function (c) {
    console.log(a + b + c);
  }
}
soma(1, 2)(3);
console.log('teste')

//arrow function
let dobro = function (a) {
  return 2 * a
}

dobro = (a) => {
  return 2 * a
}

dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function () {
  return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' // possui um param
console.log(ola())




