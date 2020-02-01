// recurso do ES2015
// operador destructuring: forma simplificada
// de extrair atributos de um objeto

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereço: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const {nome, idade} = pessoa // {} representam o operador destructuring
// a linha acima significa: retire do objeto pessoa
// os atributos nome e idade
// as chaves nome e idade se tranformam em variáveis 
// contendo os dados do objeto
console.log (nome, idade)

// os nomes das variáveis não precisam ser os mesmos das chaves
const {nome: n, idade: i} = pessoa
console.log (n, i)

// retirar um atributo que não existe
const {sobrenome, bemHumorado = true} =  pessoa
// bemHumorado = true significa que se não houver
// o atributo bemHumorado, é para colocar um valor
// padrão que, nesse caso, é true
// sobrenome, que não tem valor nenhum, dá undefined
console.log (sobrenome, bemHumorado)

// para acessar um objeto dentro de outro objeto
const {endereço: {logradouro, numero, cep}} = pessoa
// não será criada uma variável para endereço nesse caso
console.log (logradoudo, numero, cep)

// cuidado p/ não tentar acessar atributos aninhados
// que não existem
const {conta: {ag, num}} = pessoa
// console.log (ag, num) //dá erro pois conta não existe