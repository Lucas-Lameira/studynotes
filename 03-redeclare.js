// let não pode ser declarado novamente
{
  let x = "isso vai ";
  let x = "gerar um erro";
}

// var pode ser declarado novamente
{
  var y = "isso não vai ";
  var y = "gerar um erro";
}

//declaradas novamente
var isVarRedeclared = true; 
let isLetRedeclared = false; 
const isConstRedeclared = false; 

//podem ter seus valores alterados
var isVarReassigned = true; 
let isLetReassigned = true; 
const isConstReassigned = false; 
