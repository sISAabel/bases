const sort = require('./sort')


const coffee1 = [
	{name: 'largo', price: 120},
	{name: 'barraquito', price: 200},
	{name: 'solo', price: 90}
];

const sorted1 = [
	{name: 'solo', price: 90},
	{name: 'largo', price: 120},
	{name: 'barraquito', price: 200}
];

const coffee2 = [
	{name: 'largo', price: 120},
  {name: 'irlandes', price: 300},
	{name: 'solo', price: 90},
	{name: 'barraquito', price: 200},
  {name: 'capuchino', price: 180}
];

const sorted2 = [
	{name: 'solo', price: 90},
	{name: 'largo', price: 120},
  {name: 'capuchino', price: 180},
	{name: 'barraquito', price: 200},
  {name: 'irlandes', price: 300}
];


test('Lista de cafés 1', () => {
  expect(sort(coffee1)).toBe(sorted1)
})
test('Lista de cafés 2', () => {
  expect(sort(coffee2)).toBe(sorted2)
})
