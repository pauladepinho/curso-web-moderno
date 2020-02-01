let isAtivo = false
console.log (isAtivo)

isAtivo = true
console.log (isAtivo)

isAtivo = 1 // tipo number
console.log (!!isAtivo) // number transformado em boolean com negação

console.log ('Os verdadeiros...')
console.log (!!3)
console.log (!!-1)
console.log (!!' ')
console.log (!!'qualquer string')
console.log (!![])
console.log (!!{})
console.log (!!Infinity)
console.log (!!(isAtivo = true))
console.log (!!(isAtivo = Infinity))

console.log ('Os falsos...')
console.log (!!0)
console.log (!!'')
console.log (!!null)
console.log (!!NaN)
console.log (!!undefined)
console.log (!!(isAtivo = false))

console.log ('Para finalizar...')
console.log (('' || null || 0 || ' ')) // Retorna verdadeiro

let nome = ''
console.log (nome || 'Desconhecido') // Retorna Desconhecido
nome = Lucas
console.log (nome || 'Desconhecido') // Retorna Lucas