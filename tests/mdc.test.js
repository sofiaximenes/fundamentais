const mdc = require('../funcoes/mdc');

test('Calculando o MDC de 20 e 30.', () => {
  expect(contagem(20, 30).toBe(10));
});