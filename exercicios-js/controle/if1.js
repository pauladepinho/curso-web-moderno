function soBoaNoticia (nota) {
    if (nota >= 7) {
        console.log ('Aprovado com ' + nota)
    }
}

soBoaNoticia (8.1)
soBoaNoticia (6.1)

function seForVerdadeEuFalo (valor) {
    if (valor) { // seja qual for o tipo de valor, o js converte p/ boolean
        console.log ('É verdade... ' + valor)
    }
}

seForVerdadeEuFalo () // não passando nada, é undefined, que é convertido em false
seForVerdadeEuFalo (null) // false
seForVerdadeEuFalo (undefined) // false
seForVerdadeEuFalo (NaN) // false
seForVerdadeEuFalo ('') // false (string vazia)
seForVerdadeEuFalo (0) // false (zero)
seForVerdadeEuFalo (-1) // true (número != 0)
seForVerdadeEuFalo (' ') // true (string com espaço dentro)
seForVerdadeEuFalo ('?') // true (string com qqr caracter dentro)
seForVerdadeEuFalo ([]) // true (array, mesmo vazio)
seForVerdadeEuFalo ([1, 2]) // true (array com elementos)
seForVerdadeEuFalo ({}) // true (objeto vazio)