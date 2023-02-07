const lessThanOrEqualZero = require('./lessThan')

test('lessThanOrEqualZero 1', () => {
  expect(lessThanOrEqualZero(5)).toBe(false)
})

test('lessThanOrEqualZero 2', () => {
  expect(lessThanOrEqualZero(0)).toBe(true)
})

test('lessThanOrEqualZero 3', () => {
  expect(lessThanOrEqualZero(-5)).toBe(true)
})
