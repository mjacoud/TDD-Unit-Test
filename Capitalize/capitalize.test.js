const capitalize = require('./capitalize')

it('Capitalizes words', () => {
  expect(capitalize('car')).toBe('Car')
})

it('Throw an error if first Character is space', () => {
  expect(capitalize(' car')).toBe('Error')
})

it('First Character is a number', () => {
  expect(capitalize('3car')).toBe('Error')
})

it('First Character is a symbol', () => {
  expect(capitalize('-car')).toBe('Error')
})
