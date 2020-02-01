// switch serve para múltiplas seleções
// cada case deve conter um valor 
// e não intervalos entre valores

const imprimirResultado = function (nota) {
    switch (Math.floor (nota)) { // passa-se um valor pro switch
        case 10: // como não há nada aqui, ele lerá o case 9 se nota for 10
        case 9: // não precisa de {}, mesmo com várias sentenças
            console.log ('Quadro de Honra')
            break // sem break, todos os cases são executados (o padrão é fall through)
        case 8: case 7: // podem ser escritos na mesma linha
            console.log ('Aprovado')
            break
        case 6: case 5: case 4:
            console.log ('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log ('Reprovado')
            break
        default: // equivale ao else
            console.log ('Nota inválida')
        // default não precisa vir ao final,
        // mas se vier em outra posição, tem que usar o break
    }
}

imprimirResultado (10)
imprimirResultado (8.9)
imprimirResultado (6.55)
imprimirResultado (2.3)
imprimirResultado (-1)
imprimirResultado (11)