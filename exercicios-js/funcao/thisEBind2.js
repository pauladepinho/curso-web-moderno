function Pessoa () {
    this.idade = 0

    setInterval (function () {
        this.idade++
        console.log (this.idade)
    }, 1000) // setInterval dispara outra função após um intervalo
}

new Pessoa // NaN, pq não é o objeto Pessoa que está disparando
// a chamada da função, mas um temporizador

// resolução do problema:
function Pessoa () {
    this.idade = 0

    setInterval (function () {
        this.idade++
        console.log (this.idade)
    }.bind (this), 1000) // uso de bind referenciando a função a Pessoa
    // para amarrar o this à instância de Pessoa
}

new Pessoa

// continuando... outra forma de congelar para onde this aponta
function Pessoa () {
    this.idade = 0

    const self = this // aqui, this se refere a instância de Pessoa
    setInterval (function () {
        self.idade++
        console.log (self.idade)
    }/*.bind (this)*/, 1000)
}