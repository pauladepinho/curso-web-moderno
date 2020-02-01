const [a] = [10]
// acima, criou-se uma variável a que recebeu o primeiro
// elemento de um array, que nesse caso é 10
console.log (a)

// com vários elementos:
const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
// pode-se pular elementos e atribuir valor padrão
// n1 = 10, n3 = 9, n5 = undefined, n6 = 0
console.log (n1, n3, n5, n6)

// obs.: o exemplo abaixo não seria utilizado na
// prática por ser de difícil leitura, sendo mais
// fácil utilizar os índices
const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
// acima, o primeiro elemento do array foi ignorado,
// o segundo elemento, que é tb um array, foi considerado,
// mas seu primeiro elemento tb foi ignorado
// e apenas nota, seu segundo elemento foi considerado
console.log (nota) // nota == 6