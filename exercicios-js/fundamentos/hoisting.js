// o içamento ocorre quando se declara
// uma variável com var. (Isso não ocorre com let!)
// a declaração da variável sobe dentro do escopo,
// mas a atribuição continua no mesmo lugar.
// esse efeito não traz vantagens e é melhor evitá-lo.

// exemplo:
console.log ('a =', a) // a == undefined
var a = 2
console.log ('a =', a) // a == 2

// o que está acontecendo é o seguinte:
var a // declaração içada
console.log ('a =', a) // undefined, pq ñ houve atribuição
var a = 2 // atribuição
console.log ('a =', a) // a == 2

// outro exemplo:
var b = 2
console.log ('b = ', b)

function qualquer () {
    console.log ('b = ', b) // undefined
    var b = 3
}
qualquer ()

// o que está acontecendo dentro da função:
function qualquer () {
    var b // var é declarada, mas não tem valor
    console.log ('b = ', b) // undefined
    b = 3 // valor é atribuído
}