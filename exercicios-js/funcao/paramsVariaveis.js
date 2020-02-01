//  ARGUMENTS

// a função não requerer nenhum parâmetro não significa
// que nenhum parâmetro possa ser passado
// pois pode ser passado e recuperado dentro
// da função através da propriedade arguments

// toda função tem o array arguments disponível

function soma () {
    let soma = 0
    for (i in arguments) {
        arguments soma += arguments [i]
    }
    return soma
}

console.log (soma ())
console.log (soma (1))
console.log (soma (1.1, 2.2, 3.3))
console.log (soma (1.1, 2.2, 'Teste')) // soma e concatena
console.log (soma ('a', 'b', 'c')) // concatenção

// obs.: existe tb os operadores rest e spread