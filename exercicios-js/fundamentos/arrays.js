const valores = [7.7, 8.9, 6.3, 9.2]
console.log (valores [0], valores [3])
console.log (valores [4]) // Não gera erro, mas Undefined

valores [4] = 10
console.log (valores)

valores [10] = 10 // Adiciona elementos vazios no meio
console.log (valores)
console.log (valores.length)

valores.push ({id: 3}, false, null, 'teste') // push adiciona elementos
console.log (valores)

console.log (valores.pop ()) // pop remove o último elemento do array
// delete remove um atributo de um objeto:
delete valores [0] // delete remove um elemento de um índice
console.log (valores)

console.log (typeof valores) // arrays são Objects