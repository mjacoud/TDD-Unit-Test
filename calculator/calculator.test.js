const calculator = require('./calculator')

test('sums numbers', () => {
  expect(calculator.sum(2, 2)).toEqual(4)
})

test('Subtraction', () => {
  expect(calculator.sub(2, 2)).toEqual(0)
})

test('Multiply', () => {
  expect(calculator.mult(2, 3)).toEqual(6)
})

test('Division', () => {
  expect(calculator.div(2, 2)).toEqual(1)
})
