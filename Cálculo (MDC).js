// Função para calcular o MDC (Máximo Divisor Comum)
function calcularMDC(a, b) {
  // Implementação do algoritmo de Euclides para MDC
  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// Exemplo de uso:
console.log(`O MDC de 48 e 18 é: ${calcularMDC(48, 18)}`); // Saída esperada: 6
console.log(`O MDC de 101 e 103 é: ${calcularMDC(101, 103)}`); // Saída esperada: 1
