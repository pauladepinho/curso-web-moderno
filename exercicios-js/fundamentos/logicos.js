/*
XOR (ou exclusivo):
só é true se houve uma proposição true e outra false
se ambas forem true ou ambas forem false, o reslt é false
. true xor true -> false
. true xor false -> true
. false xor true -> true
. false xor false -> true
(xor é operador binário)

negação lógica:
!true -> false
!false -> true
(operador unário)
*/

// obs.: operador curto-circuito:
// se o primeiro parâmetro em uma operação com ||
// for true, já se sabe que o resultado será true e 
// a operação já é interrompida sem analisar o outro parâmetro.
// ocorre o mesmo em operação && em que o primeiro parâmetro
// é false, pois já se sabe que o resultado será false

function compras (trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho2 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // xor através da diferença dos operandos
    const manterSaudavel = !comprarSorvete // operador unário

    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
    // acima, criação de objeto literal sem pares de chave e valor explícitos
}

console.log (compras (true, true))
console.log (compras (true, false))
console.log (compras (false, true))
console.log (compras (false, false))