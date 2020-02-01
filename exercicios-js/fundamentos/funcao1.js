// Funções podem ou não receber e retornar dados
// Função sem retorno
function imprimirSoma (a, b) {
    console.log (a + b)
  }
  
  imprimirSoma (2, 3)
  imprimirSoma (2) // somar inteiro com valor undefined (b) gera um NaN -- not a number
  imprimirSoma (2, 3, 4, 5, 6) // soma os dois primeiro e ignora o resto
  imprimirSoma () // NaN
  
  //Função com retorno
  function soma (a, b = 0) {
    return a + b
  }
  
  console.log (soma (2, 3))
  console.log (soma (2))
  console.log (soma ()) // NaN