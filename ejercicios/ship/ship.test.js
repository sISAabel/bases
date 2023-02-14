const isFree = require('./ship')

test('Comprobación de envío gratis 1', () => {
  expect(freeShipping({'1kg de aguacates' : 5.99, 'Patitos de goma': 15.99})).toBe(false);
});

test('Comprobación de envío gratis 2', () => {
  expect(freeShipping({'Moily Station 5': 499.99})).toBe(true);
});

test('Comprobación de envío gratis 3', () => {
  expect(freeShipping({'Moinopoly': 14.99, 'Hogwarts Legacy': 65.99, 'Los Moinions DVD': 13.99})).toBe(true);
});

test('Comprobación de envío gratis 4', () => {
  expect(freeShipping({'Regicide': 12.32, 'Jenga': 5.55, 'Cluedo': 20.00})).toBe(false);
});

test('Comprobación de envío gratis 5', () => {
  expect(freeShipping({'Monitor curvo': 140.55, 'Exploding Mois': 10.33, 'Juego cartas sorpresa x2': 20.00})).toBe(true);
});
