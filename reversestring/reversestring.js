function reversestring(string) {
  let reversed = ''
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i]
  }
  return reversed.trim()
}

module.exports = reversestring
