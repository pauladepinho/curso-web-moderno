let valor // não inicializada -- undefined
console.log (valor)
// Undefined != is not defined
// is not defined -- variável não declarada

valor = null // ausência de valor -- não aponta p/ nenhum local de memória
//console.log (valor.toString ()) // TypeError

const produto = {}
console.log (produto.preco) // retorna undefined
//console.log (produto.preco.a) // TypeError -- cannot read property 'a' of undefined
console.log (produto)

produto.preco = 3.50
console.log (produto)

produto.preco = undefined // evitar atribuir undefined de forma explícita
console.log (!!produto.preco)
console.log (produto)
// delete produto.preco // retirar um atributo de um objeto

produto.preco = null // sem preço
console.log (!!produto.preco)
console.log (produto)