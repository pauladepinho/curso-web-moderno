// === testa se algo é estritamente igual a outra,
// ou seja, se valor E tipo são iguais
// a via de regra, é melhor usar === do que ==
console.log ('01)', '1' == 1) // true
console.log ('02)', '1' === 1) // false (tipos diferentes)
console.log ('03)', 3 != 3) // true
console.log ('04)', 3 !== 3) // false

console.log ('05)', 3 < 2) // false
console.log ('06)', 3 > 2) // true
console.log ('07)', 3 <= 2) // false
console.log ('08)', 3 >= 2) // true

// criação de datas:
const d1 =  new Date (0) // 0 é 01/01/1970, data de ref em várias linguagens
const d2 =  new Date (0)
console.log ('09)', d1 === d2) // false
console.log ('09)', d1 == d2) // false
// acima dá false pq são comparados os endereços de memória
// d1 e d2 são variáveis de referência de memória
console.log ('11)', d1.getTime () === d2.getTime ()) // true
// acima, são comparados numbers, por isso true
console.log ('12)', undefined == null) // true
console.log ('12)', undefined === null) // false