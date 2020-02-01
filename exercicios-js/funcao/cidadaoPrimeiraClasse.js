// função em js é first-class object (citizen)
// ou higher-order function
// significa que função é tratada como dado
// e pode ser passada como parâmetro,
// retornada de outra função,
// guardada em variável...

// função de alta ordem é o que possibilita
// o paradigma funcional

// criar função de forma literal:
function fun1 () {} // {} é obrigatório em função literal
// return é opcional
// funções sem return sempre retornam undefined por padrão

// armazenar em variável:
const fun2 = function () {} // função anônima (sem nome)

// armazenar em array:
const array = [function (a, b) {return a + b}, fun1, fun2]
console.log (array [0] (2, 3))

// armazenar em atributo de um objeto
const obj = {}
obj.falar = function () {return 'Opa'}
console.log (obj.falar ())

// passar como parâmetro
function run (fun) {
    fun ()
}

run (function () {console.log ('Executando...')})

// uma função pode retornar/conter uma função
function soma (a, b) {
    return function (c) {
        console.log (a + b + c)
    }
}

soma (2, 3) (4)
// na chamada da função soma,
// já se pode passar o parâmetro da função
// que está no return: soma (a, b) (c)
// outra possibilidade:
const cincoMais = soma (2, 3) // armazenamento em const
cincoMais (4) // chamada da segunda função