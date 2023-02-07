const calculateFuel = require('./fuel')

test('Calcular combustible', () => {
  expect(calculateFuel(15)).toBe(150)
})

test('Calcular combustible', () => {
  expect(calculateFuel(23)).toBe(230)
})

test('Calcular combustible', () => {
  expect(calculateFuel(10)).toBe(100)
})

test('Calcular combustible', () => {
  expect(calculateFuel(3)).toBe(100)
})

test('Calcular combustible', () => {
  expect(calculateFuel(23.5)).toBe(235)
})

test('Calcular combustible', () => {
  expect(calculateFuel(3.14)).toBe(100)
})

test('Calcular combustible', () => {
  expect(calculateFuel(9.99999)).toBe(100)
})

test('Calcular combustible', () => {
  expect(calculateFuel(822315322)).toBe(8223153220)
})

test('Calcular combustible', () => {
  expect(calculateFuel(12345.6789)).toBe(123456.789)
})

test('Calcular combustible', () => {
  expect(calculateFuel(31.41)).toBe(314.1)
})
