// Várias funções relacionadas ao tipo string

const escola = 'Cod3r'

// Retorna letra que está no índice 4 da string:
console.log (escola.charAt (4))
// Índice fora, retorna um valor vazio:
console.log (escola.charAt (5))
// Retorna valor do caractere na tabela ascii
console.log (escola.charCodeAt (3))
// Retornar índice associado a determinado caractere:
console.log (escola.indexOf ('3'))
// Retorna string a partir de um índice em diante:
console.log (escola.substring (1))
// Retorna string de um índice a outro (não incluído):
console.log (escola.substring (0, 3)) // O valor do índice 3 em diante
// fica de fora

//Concatenar...
console.log ('Escola '.concat (escola).concat ('!'))
console.log ('Escola ' + escola + '!')
// Replace...
console.log (escola.replace (3, 'e')) // Troca uma string por outra
console.log (escola.replace (/\d/, 'e')) // Troca dígito por determ. letra
console.log (escola.replace (/\w/, 'e')) // Troca a 1a letra por outra
console.log (escola.replace (/\w/g, 'e')) // Troca todas as letras

// Converter string para array:
console.log ('Ana, Maria, Pedro'.split (','))
// ou... console.log ('Ana, Maria, Pedro'.split (/,/))