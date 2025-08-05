# java-script

Desafio 1: Calcular o MDC (Máximo Divisor Comum) entre dois números
O MDC é o maior número que divide dois ou mais números inteiros ao mesmo tempo. A forma mais comum de calcular o MDC é usando o Algoritmo de Euclides. Ele funciona da seguinte forma:

Divida o número maior pelo número menor.

Se o resto da divisão for 0, o MDC é o número menor.

Se o resto não for 0, substitua o número maior pelo número menor, e o número menor pelo resto.

Repita os passos 1 a 3 até que o resto seja 0.

Como fazer:
Vamos usar um exemplo: MDC(48, 18)

Passo 1: Divida 48 por 18. 48
div18=2 (resto 12).

Passo 2: O resto não é 0.

Passo 3: Agora, o número maior é 18 e o número menor é 12.

Passo 4: Divida 18 por 12. 18
div12=1 (resto 6).

Passo 5: O resto não é 0. O número maior é 12 e o número menor é 6.

Passo 6: Divida 12 por 6. 12
div6=2 (resto 0).

Passo 7: O resto é 0! O MDC é o último número menor, que é 6.

Você pode implementar isso usando um loop while em linguagens de programação.

Desafio 2: Encontrar o índice do maior e do menor valor em um array
Para este desafio, você precisa percorrer o array (lista de números) e manter o controle do maior valor que encontrou até agora e do menor valor, além de seus respectivos índices (posições no array).

Como fazer:
Comece assumindo que o primeiro elemento do array é o maior e o menor. Guarde o valor e o índice dele.

Percorra o array a partir do segundo elemento.

Para cada elemento:

Compare-o com o maior valor que você tem registrado. Se for maior, atualize o maior valor e o seu índice.

Compare-o com o menor valor que você tem registrado. Se for menor, atualize o menor valor e o seu índice.

Ao final do percurso, você terá os índices do maior e do menor valor.

Exemplo:
Array: [10, 3, 7, 25, 1]

Início:

Maior valor = 10, Índice do maior = 0

Menor valor = 10, Índice do menor = 0

Percorrendo:

3: É menor que 10. Atualiza menor valor = 3, Índice do menor = 1.

7: Não é maior que 10 nem menor que 3.

25: É maior que 10. Atualiza maior valor = 25, Índice do maior = 3.

1: É menor que 3. Atualiza menor valor = 1, Índice do menor = 4.

Resultado:

Índice do maior valor: 3 (onde está o 25)

Índice do menor valor: 4 (onde está o 1)

Desafio 3: Soma dos múltiplos de 5 ou 7 abaixo de 1000
Aqui, você precisa somar todos os números que são múltiplos de 5 ou de 7, mas cuidado para não somar duas vezes os números que são múltiplos de ambos (como 35, que é múltiplo de 5 e de 7).

Como fazer:
A forma mais direta é usar um loop for para percorrer os números de 1 até 999 (já que é "abaixo de 1000").

Crie uma variável para armazenar a soma, começando em 0.

Percorra os números de 1 a 999.

Para cada número:

Verifique se ele é divisível por 5 (resto da divisão por 5 é 0) OU se ele é divisível por 7 (resto da divisão por 7 é 0).

Se for, adicione esse número à sua soma.

Exemplo:
Vamos considerar um exemplo menor: Múltiplos de 5 ou 7 abaixo de 50.

Múltiplos de 5: 5, 10, 15, 20, 25, 30, 35, 40, 45

Múltiplos de 7: 7, 14, 21, 28, 35, 42, 49

Observe que o 35 aparece nas duas listas. Com a abordagem que descrevi, ele será somado apenas uma vez, o que é o correto.

Implementação:
soma = 0
para cada número de 1 até 999:
  se (número % 5 == 0) OU (número % 7 == 0):
    soma = soma + número
retornar soma
