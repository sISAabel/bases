const helloBye = require('./helloBye')

test('helloBye 1', () => {
  expect(helloBye('Moisés', 1)).toBe('Hello Moisés')
})

test('helloBye 2', () => {
  expect(helloBye('Manz', 0)).toBe('Bye Manz')
})
