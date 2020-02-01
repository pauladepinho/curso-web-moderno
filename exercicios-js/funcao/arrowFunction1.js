// função arrow é sempre anônima,
// por isso precisa ser armazenada
// em um variável ou const
// o this não varia na função arrow,
// referencia sempre o this do contexto
// em que a função foi criada

let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a // se colocar o bloco {}, return tem que ser explícito
}

dobro = a => 2 * a // return implícito
console.log (dobro (Math.PI))

let ola = function () {
    return 'Olá'
}

ola = () => 'Olá' // sem parâmetro
// tb pode ser escrita assim:
ola = _ => 'Olá' // _ é um parâmetro válido, 
// que pode ser ignorado na chamada da função
// obs.: usar () é padrão, mas tb se vê _
console.log (ola ())