const calcularMDC = require('./Cálculo (MDC)'); // Certifique-se de que o nome do arquivo corresponda
// Cálculo (MDC).test.js
describe('Testes para a função calcularMDC', () => {
  test('deve retornar o MDC correto para números positivos', () => {
    expect(calcularMDC(48, 18)).toBe(6);
    expect(calcularMDC(101, 103)).toBe(1);
    expect(calcularMDC(14, 28)).toBe(14);
    expect(calcularMDC(7, 5)).toBe(1);
    expect(calcularMDC(100, 10)).toBe(10);
  });

  test('deve retornar o próprio número quando um dos argumentos é 0', () => {
    expect(calcularMDC(0, 5)).toBe(5);
    expect(calcularMDC(5, 0)).toBe(5);
    expect(calcularMDC(0, 0)).toBe(0); // MDC de 0 e 0 é 0 por convenção em muitos contextos
  });

  test('deve lidar com números grandes corretamente', () => {
    expect(calcularMDC(1071, 462)).toBe(21);
    expect(calcularMDC(999999, 999)).toBe(999);
  });
});