
### Efeito colateral
Na programação funcional, o que é executado fora da função tem o nome de efeito colateral, por exemplo, consultas/alterações em bancos de dados ou chamadas em APIs.

### fallback
sessionStorage usamos || "" como fallback caso não exista valor no sessionStorage também.


## useState function e setState class
Uma diferença importantíssima entre a função de alteração do estado criada pelo useState e a função setState que usávamos nos componentes tipo classe é que ela não aceita a alteração parcial de um objeto, ela sobrescreve o objeto completamente, que deve ser passado em sua totalidade.

## alterar somente um valor em um objeto no estado de função
setState({ ...state, idade: 21 });

## alterar somente um valor em um objeto no estado de class
setState({ idade: 21 });

#
Nos componentes funcionais podemos fazer um estado para cada valor que desejamos utilizar, diferentemente das classes em que apenas um estado era possível e deveria sempre ser um objeto.