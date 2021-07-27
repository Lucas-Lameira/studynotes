//variáveis podem ser declaradas depois de utilizadas com o hoisting.

//hoisting
{
  X = "var acontece o hoisting e a variável é inicializada a qualquer momento";
  console.log(X);
  var X;
}

//gera um erro pois o hoisting não acontece com let e const
{
  x = "const acontece hoisting, mas a variavel não é inicializada";
  console.log(x);
  let x = "";
}

{
  console.log(x);
  const x = "const acontece hoisting, mas a variavel não é inicializada";
}