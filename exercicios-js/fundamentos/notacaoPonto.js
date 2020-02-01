// a notação ponto é utiizada para acessar atributos
// visíveis de objetos

console.log (Math.ceil (6.1)) // ceil arredonda para cima
// floor arredonda para baixo

const obj1 = {}
obj1.nome = 'Bola' // notação ponto p/ criar dinamicamente
// um atributo de um objecto

// pode-se criar o atributo tb do seguinto modo:
// (notação de cochetes)
obj1 ['nome'] = 'Bola2' // dá mais flexibilidade,
// pode-se criar chaves com espaços, por ex.
// mas é ruim pq tal chave não poderá ser acessada
// com a notação ponto, que é mais enxuta

console.log (obj1.nome)

function Obj (nome) {
    this.nome = nome // this deixa o atributo 
    // do objeto público. Se usasse var, ela
    // não ficaria visível fora do escopo da função
    this.exec = function () {
        console.log ('Exec...')
    }
}

const obj2 = new Obj ('Cadeira')
const obj3 = new Obj ('Mesa')
console.log (obj2.nome)
console.log (obj3.nome)
obj3.exec ()