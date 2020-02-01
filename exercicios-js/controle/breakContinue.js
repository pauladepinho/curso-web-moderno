// break causa desvio de fluxo
// ele não influencia if,
// mas influencia switch, for e while

// continue funciona dentro de for e while,
// pq são estruturas de repetição

// break e continue devem ser evitados

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//break
for (let x in nums) {
    if (x == 5) {
        break // vai desviar o fluxo para fora do for
        // mesmo estando no bloco if, pq não age em if
    }
    console.log (`${x} = ${nums [x]}`) 
    // o índice 5 em diante não será impresso
    // por causa do break
}

//continue
for (let y in nums) {
    if (y == 5) {
        continue // interrompe a repetição atual e vai para a próxima
    }
    console.log (`${y} = ${nums [y]}`)
    // o índice 5 será pulado, não será impresso, por causa do continue
}

// obs.: a estrutura abaixo (for dentro de for) deve ser evitado
// por ser desorganizado e de difícil manutenção
// o ideal é quebrar estruturas complexas em métodos

externo: // rótulo do for externo
for (let a in nums) {
    for (let b in nums) {
        if (a == 2 && b == 3) break externo
        // com o rótulo externo, o break age sobre o for externo
        // sem o rótulo, agiria sobre o interno, que é o mais próximo
        console.log (`Par = ${a}, ${b}`)
    }
}

console.log ('Fim')