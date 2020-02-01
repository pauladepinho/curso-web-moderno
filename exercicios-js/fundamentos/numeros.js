const peso1 = 1.0
const peso2 = Number ('2.0') //Instancia um objeto Number?

console.log (peso1, peso2)
console.log (Number.isInteger (peso1)) //isInteger é um método de Number
console.log (Number.isInteger (peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

// Racionais são mostrados com apenas 2 casas decimais
console.log (media.toFixed (2)) // Mas o valor de media não é alterado
console.log (media.toString ()) // media mostrada como str, mas continua sendo number
// Converter em número binário:
console.log (media.toString (2))

const mediaStr = media.toString ()
console.log (typeof media)
console.log (typeof mediaStr)