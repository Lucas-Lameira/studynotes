//global scope
var isVarGlobalScope = true;
let isLetGlobalScope = true;
const isConstGlobalScope = true;

//block scope {} ES6
{
  // let e const declarados dentro de um bloco {} não podem ser acessadas de fora
  let isLetBlockScope = true;
  const isConstBlockScope = true;  

  // var declarados dentro de um bloco {} podem ser acessadas de fora
  var isVarBlockScope = false;
}


//function scope
function myfunction(){
  //posso acessar variáveis globais dentro da função
  console.log(globalScope);

  let functionScope = "eu vou nascer e morrer aqui";
  console.log(functionScope);
}
myfunction();

//isso causa um erro pois essa variável tem function scope
console.log(functionScope);


