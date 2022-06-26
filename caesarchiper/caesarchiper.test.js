const caesarchiper = require('./caesarchiper')

test('abc with mod(1)', () => {
  expect(caesarchiper('abc', 1)).toBe('bcd')
})

test('az with mod(1)', () => {
  expect(caesarchiper('az', 1)).toBe('ba')
})

test('AzB with mod(1)', () => {
  expect(caesarchiper('AzB', 1)).toBe('BaC')
})

test('a,b with mod(1)', () => {
  expect(caesarchiper('a.b', 1)).toBe('b.c')
})
