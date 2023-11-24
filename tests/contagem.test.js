const contagem = require('../funcoes/contagem');

test('A soma de 1 + 2 é igual a 3', () => {
  expect(contagem([1,5,6])).toBe(3);
});