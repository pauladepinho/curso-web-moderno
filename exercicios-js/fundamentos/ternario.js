// operador unário: 1 operando
// operador binário: 2 operandos
// operador ternário: 3 operandos

const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado' // arrow function
// acima, primeiro operando: a expressão relacional
// segundo operando: o return de caso true
// terceiro operando: o return de caso false
// nesse caso, o operador ternário retorna o resultado de uma função
console.log (resultado (7.1)) // aprovado
console.log (resultado (6.7)) // reprovado

const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
// nesse caso, a resposta do operador ternário foi armazenada em uma const

/*
obs.: função arrow com corpo (usa chaves e return explícito):

const resultado = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

*/