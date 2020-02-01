function area (largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log (`Valor acima do permitido: ${area}m2.`)
    } else {
        return area
    }
}
// acima, um dos ramos (if) não retorna nada
// e outro (else) retorna

console.log (area (2, 2))
console.log (area (2)) // NareaN (2 * undefined
console.log (area ()) // NaN
console.log (area (2, 3, 17, 22, 44)) // não dá erro, mas não tem propósito
console.log (area (5, 5)) // retorna undefined, além de printar oq tá no if