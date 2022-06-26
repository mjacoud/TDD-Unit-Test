const analyzearray = require('./analyzearray')

test('analyze Array', () => {
  expect(analyzearray([1, 2, 3, 4, 5])).toEqual({
    min: 1,
    max: 5,
    avg: 3,
    len: 5
  })
})
