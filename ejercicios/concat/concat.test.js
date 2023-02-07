const concat = require('./concat')

test('Concat 1', () => {
  expect(concat([1, 2, 3], [4, 5], [6, 7])).toBe([1, 2, 3, 4, 5, 6, 7])
})
test('Concat 2', () => {
  expect(concat([1], [2], [3], [4], [5], [6], [7])).toBe([1, 2, 3, 4, 5, 6, 7])
})
test('Concat 3', () => {
  expect(concat([1, 2], [3, 4])).toBe([1, 2, 3, 4])
})
test('Concat 4', () => {
  expect(concat([4, 4, 4, 4, 4])).toBe([4, 4, 4, 4, 4])
})
test('Concat 5', () => {
  expect(concat(['a'], ['b', 'c'])).toBe(['a', 'b', 'c'])
})
