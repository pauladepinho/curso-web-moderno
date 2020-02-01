// obs.: é importante conhecer o runtime, ou seja,
// se o javascript está sendo executado no browser
// ou no node
// no browser, tende a haver assincronismos e há
// um objeto global chamado Window
// as variáveis criadas direto no console do browser
// passam a pertencer a Window (obs.: this === Window no browser)
// então, é melhor criar outros objetos pq
// não se deve criar variáveis no escopo global

// abaixo, exemplos de node:

let a = 3 // variável local

global.b = 123 // global no Node é como Window no browser

this.c = 456 // this === module.exports
this.d = false
this.e = 'teste'

console.log (a)
console.log (global.a) // undefined, pq a não é global
console.log (global.b)
console.log (this.c)
console.log (module.exports.c)
console.log (module.exports === this) // true
console.log (module.exports) // printa { c: 456, d: false, e: 'teste' }

// module.exports = { f: 456, g: false, h: 'teste' }
// acima é igual a this.f = 456 etc

// criando uma variável maluca sem var e let:
abc = 3 // não fazer isso, pq mexe no escopo global!!!
console.log (global.abc)