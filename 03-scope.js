//global scope
let globalScope = "eu funciono em todo o script";
const gScope = "eu funciono em todo o script";

//
var isVarGlobalScope = true;
let isLetGlobalScope = true;
const isConstGlobalScope = true;


//block scope
{
  let rule = "let tem escopo de bloco";
  const leru = "const tem escopo de bloco";
  console.log(globalScope);
  //não é possível acessar as variáveis de bloco fora do scopo de bloco
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


