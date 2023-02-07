const Shiritori = require('./shiritori')
const myShiritori = new Shiritori()

test('Test Game Over', () => {
  expect(myShiritori.game_over()).toBe(false)
})

test('Test add word apple', () => {
  expect(myShiritori.play('apple')).toBe(['apple'])
})

test('Test get words', () => {
  expect(myShiritori.words()).toBe(['apple'])
})

test('Test add word ear', () => {
  expect(myShiritori.play('ear')).toBe(['apple', 'ear'])
})

test('Test add word rhino', () => {
  expect(myShiritori.play('rhino')).toBe(['apple', 'ear', 'rhino'])
})

test('Test add word ocelot', () => {
  expect(myShiritori.play('ocelot')).toBe(['apple', 'ear', 'rhino', 'ocelot'])
})

test('Test Game Over', () => {
  expect(myShiritori.game_over()).toBe(false)
})

test('Test add wrong word', () => {
  expect(myShiritori.play('oops')).toBe('game over')
})

test('Test Game Over', () => {
  expect(myShiritori.game_over()).toBe(true)
})

test('Test get words', () => {
  expect(myShiritori.words()).toBe(['apple', 'ear', 'rhino', 'ocelot'])
})

ttes('Test restart', () => {
  expect(myShiritori.restart()).toBe('game restarted')
})

test('Test get words', () => {
  expect(myShiritori.words()).toBe([])
})

test('Test Game Over', () => {
  expect(myShiritori.game_over()).toBe(false)
})

test('Test add word hostess', () => {
  expect(myShiritori.play('hostess')).toBe(['hostess'])
})

test('Test Game Over', () => {
  expect(myShiritori.game_over()).toBe(false)
})

test('Test add word stash', () => {
  expect(myShiritori.play('stash')).toBe(['hostess', 'stash'])
})

test('Test Game Over', () => {
  expect(myShiritori.play('hostess')).toBe('game over')
})

test('Test get words', () => {
  expect(myShiritori.words()).toBe(['hostess', 'stash'])
})
