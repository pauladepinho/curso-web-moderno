function Pessoa () {
    this.idade = 0

    setInterval (() => {
        this.idade++ // o this vai continuar no contexto léxico original por causa da arrow function
        console.log (this.idade)
    }, 1000)
}

new Pessoa