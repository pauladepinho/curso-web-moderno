var a = 3
let b = 4 // Preferível ao invés de var

var a = 30
b = 40 // Não pode usar let b novamente

console.log (a, b)

a = 300
b = 400

console.log (a, b)

const c = 5 // Não se pode reatribuir outro valor a c

console.log (c)

/* Em programação funcional, é comum utilizar constantes, 
que geram outras constantes quando manipuladas.
Variáveis são utilizadas apenas em escopos pequenos.
*/