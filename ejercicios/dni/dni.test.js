const validar = require('./dni')

test('Test 1 - DNI ->', () => {
  expect(validar('42345678')).toBe('X')
})

test('Test 2 - DNI ->', () => {
  expect(validar('12345678')).toBe('Z')
})

test('Test 3 - DNI ->', () => {
  expect(validar('34567877')).toBe('G')
})
