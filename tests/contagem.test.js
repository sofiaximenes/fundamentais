const contagem = require('../funcoes/contagem');

test('adds 1 + 2 to equal 3', () => {
  expect(contagem([1,5,6]).toBe(3));
});