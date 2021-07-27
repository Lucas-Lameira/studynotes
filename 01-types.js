//três formas de declarar uma variavel 
{
  //case sensitve identifiers
  var x; 
  let X;
  const z;
}

// tipos primitivos
{
  let p = 10;         //number
  let r = 15.5;       //number
  let i = "lucas";    //string
  let m = 'lucas';    //string
  let I = true        //boolean
  let t = false;      //boolean 
  let v;              //undefined
  let e = undefined;  //undefined            
}

// tipos de informação complexos
{
  let c = function myFunctiont(){};             //function
  let o = () => {};                             //function/arrow function
  let m = [];                                   //object/array                                       
  let p = {};                                   //object
  let lex = null;                               //object
}


// outros conceitos como declare, assign, expression, identifiers
{
  //declare - criar uma variavel
  let numero;
  let x1;
  let total;

  //identifiers - é o nome da variável com nome único e são case sensitive
  let nome;
  let idade;

  //assignment
  nome = "lucas";
  idade = "25";
  numero = 5;

  //declare e assignment
  let java = "hello world";

  //expression
  numero = numero + 15.5;
}