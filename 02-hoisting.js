//variáveis podem ser declaradas depois de utilizadas com o hoisting.

//hoisting
{
  X = "Aqui acontece o hoisting";
  console.log(X);
  var X;
}

//gera um erro pois o hoisting não acontece com let e const
{
  x = "let não acontece o hoisting";
  console.log(x);
  let x = "";
}

{
  console.log(x);
  const x = "const não acontece hoisting";
}

//uma boa prática é declarar as variáveis no começo do script