const encontrarIndicesMaiorMenor = require('./Array'); // Certifique-se de que o nome do arquivo corresponda
// Array.test.js
describe('Testes para a função encontrarIndicesMaiorMenor', () => {
  test('deve retornar os índices corretos para um array típico', () => {
    const arr1 = [10, 5, 20, 3, 15, 2];
    expect(encontrarIndicesMaiorMenor(arr1)).toEqual([2, 5]); // Maior 20 (índice 2), Menor 2 (índice 5)
  });

  test('deve retornar os índices corretos para um array com floats', () => {
    const arr2 = [1.1, 0.5, 3.2, 0.1, 2.5];
    expect(encontrarIndicesMaiorMenor(arr2)).toEqual([2, 3]); // Maior 3.2 (índice 2), Menor 0.1 (índice 3)
  });

  test('deve retornar [null, null] para um array vazio', () => {
    const arr3 = [];
    expect(encontrarIndicesMaiorMenor(arr3)).toEqual([null, null]);
  });

  test('deve retornar [0, 0] para um array com um único elemento', () => {
    const arr4 = [42];
    expect(encontrarIndicesMaiorMenor(arr4)).toEqual([0, 0]);
  });

  test('deve lidar com valores negativos', () => {
    const arr5 = [-10, -5, -20, -3, -15, -2];
    expect(encontrarIndicesMaiorMenor(arr5)).toEqual([5, 2]); // Maior -2 (índice 5), Menor -20 (índice 2)
  });

  test('deve lidar com arrays onde maior e menor estão nas extremidades', () => {
    const arr6 = [1, 5, 3, 7, 2, 9];
    expect(encontrarIndicesMaiorMenor(arr6)).toEqual([5, 0]); // Maior 9 (índice 5), Menor 1 (índice 0)
  });

  test('deve lidar com arrays onde maior e menor estão no meio', () => {
    const arr7 = [10, 2, 50, 5, 30];
    expect(encontrarIndicesMaiorMenor(arr7)).toEqual([2, 1]); // Maior 50 (índice 2), Menor 2 (índice 1)
  });
});
