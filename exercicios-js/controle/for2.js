// for-in dá os índices dos elementos
// não é uma estrutura muito usada com arrays,
// mas é uma boa opção quando se trata de objetos


// array
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) { // parecido com o for do Python
    console.log (i, notas [i])
}

//objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

for (let atributo in pessoa) { // lembrar de sempre usar let
    console.log (atributo, pessoa [atributo])
    // acima, tem que usar pessoa [atributo], pq 
    // notação ponto (pessoa.atributo) dá undefined
}