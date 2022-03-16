function adicionar(num1,num2){
    const soma = num1 + num2;
    return soma;
}

function subtracao(num1,num2){
    const resultado = num1 - num2;
    return resultado;
}

function multiplicacao(num1,num2){
    const resultado = num1 * num2;
    return resultado;
}

function divisao(num1,num2){
    const resultado = num1 / num2;
    return resultado;
}

console.log ("-------------- Teste de Operações / Calculador --------------")

console.log("Soma",(adicionar(5,5)));
console.log("Sultração",(subtracao(5,5)));
console.log("Multiplicação",(multiplicacao(5,5)));
console.log("Divisão",(divisao(5,5)));
console.log("Divisão",(divisao(5,0)));

console.log ("----------------------- Funções Extras ----------------------")

/*Crie uma função chamada quadradoDoNumero, que recebe um número como
parâmetro e deve retornar esse número multiplicado por ele mesmo, ou seja,
ao quadrado
Importante: quadradoDoNumero() deve usar a função multiplicação() para
calcular o quadrado do parâmetro inserido em power().
*/
function quadradoDoNumero(numero){
    const resultado = multiplicacao(numero,numero);
    console.log(numero, "² tem como resultado: ",resultado);
    return resultado
}
quadradoDoNumero(8);

/*Crie a função mediaDeTresNumeros, ela deve calcular a média de 3 números,
que serão inseridos por parâmetro.
Importante: Em mediaDeTresNumeros() você precisará usar algumas funções
criadas anteriormente em nossa calculadora.*/

function mediaDeTresNumeros(num1,num2,num3){
    const resultadoSoma1 = adicionar(num1,num2,num3);
    const resultadoSoma2 = adicionar(resultadoSoma1,num3);
    const resultadoMedia = divisao(resultadoSoma2, 3);
    console.log("A média dos número ", num1,",",num2,",",num3,"é", resultadoMedia);
}
mediaDeTresNumeros(5,5,5);

/*
Crie a função calculaPorcentagem, que receberá dois parâmetros: o número
total e a porcentagem que deseja calcular, e que deverá retornar x% de
totalPorcentagem.
Exemplo: calculaPorcentagem(300, 15) (deve retornar 45, pois é 15% de 300).
Importante: calculaPorcentagem() você precisará usar algumas funções
criadas anteriormente em nossa calculadora. Formula (300/100% * 15%)
*/

function calculaPorcentagem(num1,num2){
    const resultadoDivisao = divisao(num1,100);
    const resultadoMultiplicacao = multiplicacao(resultadoDivisao,num2);
    return resultadoMultiplicacao;
}

console.log("Deve retornar:" + calculaPorcentagem(300, 15) + ",pois é 15% de 300.");

/*
4. Crie uma função geradorDePorcentagem que leva dois parâmetros, e que deverá
retornar a porcentagem do primeiro em relação ao segundo parâmetro.
Exemplo: geradorDePorcentagem (2, 200) (deve retornar 1 já que 2 é 1% de 200)
*/

function geradorDePorcentagem(n1,n2){
    const resultMult = multiplicacao(n1,100);
    const resultDiv = divisao(resultMult,n2);
    console.log("O gerador de porcentagem ("+ n1 + ", " +n2 +") deve retornar "+ resultDiv + " já que " + n1 + " é " + resultDiv+"% de " + n2+".");
    return resultDiv;
}

geradorDePorcentagem(2,200);