// arrow function é sempre anônima
// função tradicional pode ser nomeada ou anônima

const soma = function (x, y) {
    return x + y
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log (operacao (a, b))
}

imprimirResultado (3, 4)
imprimirResultado (3, 4, soma)
imprimirResultado (3, 4, function (x, y) {
    return x - y
}) // passar uma função anônima na chamada de outra função
// é algo bastante comum em js
imprimirResultado (3, 4, (x, y) => x * y)

// função anônima dentro de obj:
const pessoa = {
    falar/* : function */ () { // pode ou não usar : function
        console.log ('Opa')
    }
}

pessoa.falar ()