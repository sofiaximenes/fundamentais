const fibonacciArray = require('../funcoes/fibonacci');

test('Array de 10 numeros na ordem fibonacci', () => 
{
  expect(fibonacciArray(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34])
});

test('os 2 primeiros numeros devem ser 0 e 1', () => {
  expect(fibonacciArray(2)).toMatchObject([0, 1])
});