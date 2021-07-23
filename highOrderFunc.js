//Uma função de alta ordem é uma função que recebe ou retorna uma função.
//funções são cidadãos de primeira classe. O que significa que podem ser tratados como valores e salvo em variável
{
  const subtrair = (x, y) => x - y;
  const somar = (x, y) => x + y;
  const multiplicar = (x, y) => x * y;
  const dividir = (x, y) => x / y;
  
  const operacao = (x, y, operacao) => operacao(x, y);
  
  let resultado = operacao(5, 8, multiplicar);
  console.log(resultado)
}


{
  const sum = (x) => (y) => x+y;

  const sumx = sum(5);
  console.log(sumx(5));
}



let array = [0,1,2,3,4,5,6,7,8,9,10];

let array2 = array.map(item => {
    return item + 1;
});


console.log(array)
console.log(array2)
