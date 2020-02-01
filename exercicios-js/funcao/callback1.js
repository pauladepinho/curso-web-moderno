// callback é uma função que é chamada quando outro evento acontece

const fabricantes = ['Mercedes', 'Audi', 'BMW']

function imprimir (nome, indice) {
    console.log (`${indice + 1}. ${nome}`)
}

fabricantes.forEach (imprimir) // para cada elemento do array, forEach ()
// vai chamar imprimir ()
// forEach () é uma função de array que retorna
// o elemento (nome) e o índice
// então ela própria vai passar esses valores para imprimir ()

fabricantes.forEach (function (a) { // esse caso tem apenas 1 parâmetro,
    console.log (a) // os elementos do array (a == fabricante)
})
// outra forma de escrever a função acima:
fabricantes.forEach (fabricante => console.log (fabricante))