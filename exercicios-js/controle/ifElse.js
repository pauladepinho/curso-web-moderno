const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log ('Aprovado!')
    } else {
        console.log ('Reprovado!')
    }
}

imprimirResultado (10)
imprimirResultado (4)
imprimirResultado ('Epa!') // reprovado pq
// a comparação de string com número não é possível,
// gerando resultado false

/*
const teste = nota => nota >= 7 ? console.log ('Aprovado!') : console.log ('Reprovado!')
teste (5)
*/