let comparaComThis = function (param) {
    console.log (this === param)
}

comparaComThis (global) // true (pq está no contexto global do node)
// no browser, dá true com window (que é como se chama o obj global no browser)

const obj = {}
comparaComThis = comparaComThis.bind (obj)
comparaComThis (global) // agora dá false, por causa do bind
comparaComThis (obj) // true - this === obj devido ao bind

let comparaComThisArrow = param => console.log (this === param)
comparaComThisArrow (global) // false
comparaComThisArrow (module.exports) // true,
// com função arrow, this é global do module exports

// tentativa de mudar o contexto do this em arrow function:
comparaComThisArrow = comparaComThisArrow.bind (obj)
comparaComThisArrow (obj) // false
// arrow function é mais forte que o bind
// o contexto do this não muda com bind
comparaComThisArrow (module.exports) // continua true