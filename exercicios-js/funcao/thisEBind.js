const pessoa = {
    saudacao: 'Bom dia',
    falar () {
        console.log (this.saudacao) // precisa usar this
    }
}

pessoa.falar ()
const falar = pessoa.falar
falar () // dá undefined pq não há saudacao na const falar
// (conflito entre paradigmas funcional e OO)
// o função bind resolve isso:
const falarDePessoa = pessoa.falar.bind (pessoa)
// com bind, o this sempre se refere ao objeto passado como parâmetro
falarDePessoa ()