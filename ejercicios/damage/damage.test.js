const calculateDamage = require('./damage')

test('Fuego contra agua', () => {
  expect(calculateDamage('fire', 'water', 100, 100)).toBe(25)
})

test('Hierba contra agua', () => {
  expect(calculateDamage('grass', 'water', 100, 100)).toBe(100)
})

test('Eléctrico contra fuego', () => {
  expect(calculateDamage('electric', 'fire', 100, 100)).toBe(50)
})

test('Hierba contra eléctrico', () => {
  expect(calculateDamage('grass', 'electric', 57, 19)).toBe(150)
})

test('Hierba contra agua2 ', () => {
  expect(calculateDamage('grass', 'water', 40, 40)).toBe(100)
})

test('Hierba contra fuego', () => {
  expect(calculateDamage('grass', 'fire', 35, 5)).toBe(175)
})

test('Fuego contra eléctrico', () => {
  expect(calculateDamage('fire', 'electric', 10, 2)).toBe(250)
})
