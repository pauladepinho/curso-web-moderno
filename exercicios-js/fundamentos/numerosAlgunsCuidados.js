console.log (7 / 0) // Retorna tipo Infinity
console.log ('10' / 2) // Não dá erro, pq a str é convertida automaticamente
console.log ('3' + 2) // Nesse caso, há concatenação e não soma
console.log ('Show!' * 2) // Retorna NaN - not a number
console.log (0.1 + 0.7) // Não retorna 0.8, mas 0.799999999
// pq segue uma especificação que não é precisa, mas é mais rápida

//console.log (10.toString ()) // Retorna exceção - unexpected token
console.log ((10).toString ()) // Funfa colocando núm. entre ()
console.log ((10.345).toFixed (2))