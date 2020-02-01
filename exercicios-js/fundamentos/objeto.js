// Objetos são coleções de chaves e valores
// Não é o mesmo que JSON, que é um formato textual!!!
// JSON serve para trocar dados entre sistemas

const prod1 = {}
prod1.nome = 'Celular Ultra Mega' // nome foi criado dinamicamente
prod1.preco = 4998.90
prod1 ['Desconto legal'] = 0.40 // Evitar atributos com espaço

console.log (prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 2
    }
}

console.log (prod2)