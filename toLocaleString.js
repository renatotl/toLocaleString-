console.clear();//limpa o terminal

const prompt = require("prompt-sync")();//neecessário para o usuário digitar


let valor = +prompt("Digite um valor ");//valor digitado
console.log(`Valor digitado: ${valor}`);//imprimindo valor
console.log();


let valor2 = 1534.333
let valor3 = 1534.333

console.log(`Valor fixado: ${valor2}`);
console.log();

//valor2.toFixed(2)colocar exatamente 2 casas a direita da vírgula
console.log(`Valor com o .toFixed(2); ${valor2.toFixed(2)}`)
console.log();

// console.log(`Valor apenas com o .replace(".",","): ${valor3.replace(".",",")} `);
// console.log();


//substitui o ponto pela vírgula
console.log(`Valor digitado com o toFixed(2) e replace(".",","): ${valor2.toFixed(2).replace(".",",")}`);
//imprime
// O REPLACE troca uma coisa por outra

console.log();//pular linha

console.log("Valores com o código que já converte para valor monetário. ");
console.log();//pular linha

/* string localizada em PT-BR. O STYLE 'CURRENCY' mostra em valor menotário */
console.log(valor.toLocaleString(`pt-BR`,{style:`currency`,currency: `BRL`}));

console.log(valor.toLocaleString('pt-BR',{style:'currency',currency: 'USA'}));

console.log(valor.toLocaleString('pt-BR',{style:'currency',currency: 'EUR'}));


console.log();//pular linha


