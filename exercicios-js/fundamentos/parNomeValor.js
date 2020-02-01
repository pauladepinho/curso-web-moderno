const saudacao = 'Opa' // contexto léxico 1

function exec () {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome ou chave e valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
        // endereco poderia ter chaves com mesmo nome
        // de uma chave de cliente, pois os contextos
        // são diferentes
    }
}

console.log (saudacao) // printa Opa
console.log (exec ()) // printa Falaaa
console.log (cliente) // printa chaves e valores