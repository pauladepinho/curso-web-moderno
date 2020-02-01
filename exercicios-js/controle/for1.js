// exemplo 1: while para qnt de repetição definida
let contador = 1

while (contador <= 10) {
    console.log (`contador = ${contador}`)
    contador++
}

// exemplo 2: for
for (let i = 1; i <= 10; i++) {
    console.log (`i = ${i}`)
}

// exemplo 3: for usado em array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i = 0; i < notas.length; i++) {
    console.log (`notas = ${notas[i]}`)
}
// obs.: há métodos para se percorrer e trabalhar com arrays
// que são melhores que a estrutura de controle for