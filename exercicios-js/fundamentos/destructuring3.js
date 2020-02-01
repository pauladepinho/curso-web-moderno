// destructuring pode ser usado como parâmetro
// de uma função

// objeto
// espera-se que um objeto seja passado como parâmetro
// e já se retira os atributos com os quais se quer
// trabalhar sem precisa usar a notação ponto
function rand ({min = 0, max = 1000}) {
    const valor = Math.random () * (max - min) + min // valores randomicos entre min e max
    return Math.floor (valor)
}

const obj = {max: 50, min: 40}
console.log (rand (obj))

console.log (rand ({min: 955})) // max receberá o valor padrão
console.log (rand ({})) // min e max recebem valores padrões

// console.log (rand ()) // dá erro, pois não é passado
// nenhum parâmetro para ser desestruturado
// para evitar isso, a função poderia ser declarada
// da seguinte forma:
// function rand ({min = 0, max = 1000} = {})
// mas mesmo assim daria algo como NaN pq não haveria
// min e max para fazer as operações