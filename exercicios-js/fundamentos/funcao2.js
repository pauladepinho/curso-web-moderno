// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log (a + b)
  }
  
  imprimirSoma (2, 3)
  
  // Armazenando uma função arrow em uma variável
  const soma = (a, b) => {
    return a + b
  }
  
  console.log (soma (2, 3))
  
  // Retorno implícito
  const subtracao = (a + b) => a - b // se a função tiver apenas 1 parâmetro, nem precisa usar ()
  console.log (subtracao (2, 3))
  
  const imprimir2 = a => console.log (a)
  imprimir2 ('Legal!!!')