let num1 = 1
let num2 = 2

// forma postfix
num1++
console.log (num1)

// forma prefix
--num1 // igual a num1--, mas tem uma precedência maior (prioridade sobre num--)
console.log (num1)

console.log (++num1 === num2--) // true, pq compara ++num1 a num2 antes que
// este vire num--
console.log (num1 === num2) // false

// obs.: evitar utilizar incremento dentro de comparação
// para não causar confusão!!! O código tem que ser simples

console.log (-num1)
console.log (!num2)