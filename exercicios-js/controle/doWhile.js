// do-while é uma estrutura muito pouco utilizada

function getInteiroAleatorioEntre (min, max) {
    const valor = Math.random () * (max - min) + min
    return Math.floor (valor)
}

let opcao = -1

do { // haverá execução do bloco mesmo c/ opcao == -1
    opcao = getInteiroAleatorioEntre (-1, 10)
    console.log (`Opção escolhida foi ${opcao}.`)
} while (opcao != -1) // a expressão vem depois do bloco
// é a única estrutura de controle em que isso acontece

console.log ('Até a próxima!')