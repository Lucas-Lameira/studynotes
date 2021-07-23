const vetor = [];

//fill vector
for(let i=0; i<50; i+=2) {
  vetor.push(i);
}

//values
for(let numero of vetor){
  console.log(`Valor: ${numero}`);
}

//apenas os indices
for(let indice in vetor){
  console.log(`Indice: ${indice}`);
}

//pegar valores pelo indice
for(let indice in vetor){
  console.log(`Indice: ${vetor[indice]}`);
}

//percorrendo uma matriz

{
  let matriz = [
    ['a', 'b', 'c'],
    ['laranja', 'maçã', 'uva'],
    [1, true, undefined]
  ];

  for(let linha of matriz) {
    for(let coluna of linha){
      console.log(coluna);
    }
  }
} 


{
  let vetor = ['indice']
  console.log(vetor);
  
  vetor['indice'] = "teste";
  console.log(vetor);
  console.log(vetor[0]);

}


// pilha
{
  const x = 10;
  let array = [0,1,2,3];

  //push e pop operam sobre o ultimo elemento do array
  array.push(x);
  array.pop(x);
}

{
  const x = 10;
  let array = [0,1,2,3];

  //unshift e shift operam sobre o primeiro elemento do array
  array.unshift(x); //adciona na primeira posição do vetor
  array.shift(x);   //remove o primeiro elemento do vetor
}