console.log (typeof Object) // function
console.log (typeof new Object) // object (instanciamento de função)
console.log (typeof new Object ()) // os () de Object podem ser omitidos

const Cliente = function () {} // definição de função
console.log (typeof Cliente) // function
console.log (typeof new Cliente) // object

class Produto {} // classe é só uma forma diferente de construir uma função
console.log (typeof Produto) // function
console.log (typeof new Produto) // object