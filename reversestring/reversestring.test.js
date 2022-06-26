const reversestring = require('./reversestring')

test('String not reversed', () => {
  expect(reversestring('car')).toBe('rac')
})

test('String starts with space', () => {
  expect(reversestring(' car')).toBe('rac')
})

test('String is a palindrom', () => {
  expect(reversestring('bob')).toBe('bob')
})

test('String is a phrase', () => {
  expect(reversestring('bob is a man')).toBe('nam a si bob')
})
