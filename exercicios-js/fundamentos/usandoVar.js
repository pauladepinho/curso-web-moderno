// Escopo
// var é GLOBAL fora de funções
// var fica visível fora de blocos:
{{{{var sera = 'Será???'}}}}
console.log (sera)

// var fica visível apenas dentro do escopo da função:
function teste () {
  var local = 123
}

teste ()
console.log (local) // retorna undefined