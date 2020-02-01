// js não conta identação
// e pode-se colocar 2 sentenças na mesma linha
// desde que se use ;

function teste1 (num) {
    if (num > 7)
        console.log (num) // pertence ao if
        console.log ('Final') // está fora do if
}

teste1 (6) // printa apenas Final
teste1 (8) // printa num e Final

function teste2 (num) {
    if (num > 7); { // não tem nada no if pelo ;
        console.log (num) // não está no if
    }
}

teste2 (6)
teste2 (8)