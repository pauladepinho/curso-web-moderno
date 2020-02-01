// estrategia 1 para gerar valor padrão:
function soma1 (a, b, c) {
    a = a || 1 // se nada for passado como parâm. a = 1
    b = b || 1
    c = c || 1
    return a + b + c
}

console.log (soma1 (), soma1 (3), soma1 (1, 2, 3))
console.log (soma1 (0, 0, 0)) // dá problema (retorna 3)
// pq em a = 0 || 1, a vai receber 1 e não 0

// estratégias 2, 3 e 4 para gerar valor padrão:
function soma2 (a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN (c) ? 1 : c // é a mais segura dessas 3
    return a + b + c
}

console.log (soma2 (), soma2 (3), soma3 (1, 2, 3))
console.log (soma2 (0, 0, 0)) // retorna corretamente 0

// melhor forma de gerar valor padrão:
function soma3 (a = 1, b = 1, c = 1) {
    return a + b + c
}

console.log (soma3 (), soma3 (3), soma3 (1, 2, 3))
console.log (soma3 (0, 0, 0))