/**
 * Encontra os índices do maior e do menor valor em um array numérico sem valores repetidos.
 * @param {Array<number>} arr Uma lista de números (inteiros ou floats), sem valores repetidos.
 * @returns {Array<number | null>} Um array contendo o índice do maior valor e o índice do menor valor.
 * Retorna [null, null] se o array for vazio.
 */
function encontrarIndicesMaiorMenor(arr) {
    if (!arr || arr.length === 0) {
        return [null, null];
    }

    let minVal = arr[0];
    let maxVal = arr[0];
    let minIdx = 0;
    let maxIdx = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
            minIdx = i;
        }
        if (arr[i] > maxVal) {
            maxVal = arr[i];
            maxIdx = i;
        }
    }
            
    return [maxIdx, minIdx];
}

// NOVO: Exporte a função para que ela possa ser usada por outros arquivos (como seus testes).
module.exports = encontrarIndicesMaiorMenor;

// Exemplos de uso (mantidos como comentários, pois não são parte da função em si):
// const meuArray = [10, 5, 20, 3, 15, 2];
// const [indiceMaior, indiceMenor] = encontrarIndicesMaiorMenor(meuArray);
// console.log(`Array: [${meuArray}]`);
// console.log(`Índice do maior valor: ${indiceMaior} (valor: ${meuArray[indiceMaior]})`);
// console.log(`Índice do menor valor: ${indiceMenor} (valor: ${meuArray[indiceMenor]})`);

// const outroArray = [7, 1, 9, 4, 2];
// const [indiceMaior2, indiceMenor2] = encontrarIndicesMaiorMenor(outroArray);
// console.log(`\nArray: [${outroArray}]`);
// console.log(`Índice do maior valor: ${indiceMaior2} (valor: ${outroArray[indiceMaior2]})`);
// console.log(`Índice do menor valor: ${indiceMenor2} (valor: ${outroArray[indiceMenor2]})`);
