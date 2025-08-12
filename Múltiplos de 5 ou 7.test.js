const somaMultiplos5ou7 = require('./Múltiplos de 5 ou 7'); // Certifique-se de que o nome do arquivo corresponda
// Múltiplos de 5 ou 7.test.js
describe('Testes para a função somaMultiplos5ou7', () => {
  test('deve calcular a soma correta para um limite pequeno', () => {
    // Múltiplos de 5 ou 7 abaixo de 10: 5, 7. Soma = 12.
    expect(somaMultiplos5ou7(10)).toBe(12);
  });

  test('deve calcular a soma correta para um limite maior', () => {
    // Múltiplos de 5 ou 7 abaixo de 20: 5, 7, 10, 14, 15. Soma = 51.
    expect(somaMultiplos5ou7(20)).toBe(51);
  });

  test('deve retornar 0 para um limite muito pequeno (sem múltiplos)', () => {
    expect(somaMultiplos5ou7(1)).toBe(0);
    expect(somaMultiplos5ou7(4)).toBe(0);
  });

  test('deve retornar a soma esperada para o limite 1000', () => {
    expect(somaMultiplos5ou7(1000)).toBe(228999);
  });

  test('deve lidar com o limite igual a um múltiplo de 5 ou 7 (limite exclusivo)', () => {
    // Múltiplos de 5 ou 7 abaixo de 5: Ninguém. Soma = 0.
    expect(somaMultiplos5ou7(5)).toBe(0);
    // Múltiplos de 5 ou 7 abaixo de 7: 5. Soma = 5.
    expect(somaMultiplos5ou7(7)).toBe(5);
  });
});