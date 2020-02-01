// let tem escopo dentro de blocos (além de escopo global e de função, como var)
var numero = 1
{
  let numero = 2
  console.log ('dentro =', numero)
}
console.log ('fora =', numero)

var numero = 1
{
  let numero2 = 2
  console.log ('dentro =', numero)
}
console.log ('fora =', numero)