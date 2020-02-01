function tratarErroELancar (erro) {
    // todos os throws abaixo são válidos:
    // throw new Error ('...') // pode passar uma mensagem nova de erro
    // throw 10 // um number
    // throw true // um boolean
    // throw 'mensagem' // uma string
    throw { // um objeto
        nome: erro.name,
        msg: erro.message,
        date: new Date // data atual
    }
}

function imprimirNomeGritado (obj) {
    try {
        console.log (obj.name.toUpperCase () + '!!!')
    } catch (e) {
        tratarErroELancar (e)
    } finally { // é executado sempre, haja ou não erro
        console.log ('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNomeGritado (obj) // dá erro pq na função está name e não nome