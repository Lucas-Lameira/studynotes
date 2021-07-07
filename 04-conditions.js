let condition = true;

if(condition){
  //code
}

{
  if(condition){
    //code
  }else{
    //code
  }
}

{
  if(condition){
    //code
  }else if(condition){
    //code
  }else{
    //code
  }
}

{
  condition ? "true" :  "false"
  let isTrue = condition ? "true" :  "false";
}

/* {
  condition = 6 > 5; //return true
  condition = 5 > 5; //return false
  condition = 5 >= 5; //return true
  condition = 6 < 5; //return false
  condition = 5 < 6; //return true
  condition = 5 <= 5; //return true
  condition = 5 == 5; //return true
  condition = 5 === 5; //return true
  condition = 5 === '5'; //return false
  condition = 5 != 5; //return false
  condition = 5 != '5'; //return false
  condition = 5 != 4; //return false
  condition = 5 !== '5'; //return true
  condition = 5 !== 5; //return false
  console.log(condition);
}   */


const sinal = 'vermelho';
switch(sinal) {
  case 'vermelho':
    console.log('sinal vermelho, não passe');
    break;
  case 'amarelo':
    console.log("sinal amarelo, reduza a velociade");
    break;
  case 'verde':
    console.log("sinal verde, pode avançar");
    break;
  default:
    console.log("sinal quebrado");
    break;
}

console.log();