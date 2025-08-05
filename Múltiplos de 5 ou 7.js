/**
 * Calcula a soma de todos os números inteiros abaixo de um dado limite
 * que são múltiplos de 5 ou de 7.
 * @param {number} limite O limite superior (exclusivo) para a verificação.
 * @returns {number} A soma dos múltiplos.
 */
function somaMultiplos5ou7(limite) {
    let soma = 0;
    for (let i = 1; i < limite; i++) {
        if (i % 5 === 0 || i % 7 === 0) {
            soma += i;
        }
    }
    return soma;
}

// Exemplo de uso:
// const limite = 1000;
// const resultadoSoma = somaMultiplos5ou7(limite);
// console.log(`A soma de todos os múltiplos de 5 ou 7 abaixo de ${limite} é: ${resultadoSoma}`); // Saída esperada: 228999