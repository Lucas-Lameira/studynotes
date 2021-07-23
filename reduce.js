{
  const vetor = [0,1,2,3,4,5,6];

  const soma = vetor.reduce((estado, item) => estado + item, 0);
  console.log(soma);
}

{
  const vetor = [1,2,3,4,5,6];

  const soma = vetor.reduce((estado, item) => estado * item, 1);
  console.log(soma);
}


//redução a um objeto
{
  const matriz = [
    [1,2,3,4,5,6],
    [6,5,4,3,2,1],
    [3,2,1,4,5,6]
  ]
}