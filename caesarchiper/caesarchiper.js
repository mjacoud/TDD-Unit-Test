function caesarchiper(string, modifier) {
  let newString = ''
  var encrypt

  for (let i = 0; string.length - 1 >= i; i++) {
    encrypt = string.charCodeAt(i) + modifier
    if (/\W+/g.test(string[i])) {
      newString += string[i]
    } else if (encrypt > 122) {
      encrypt = encrypt - 122 + 96
      newString += String.fromCharCode(encrypt)
    } else if (encrypt > 90 && encrypt < 97) {
      encrypt = encrypt - 89 + 65
      newString += String.fromCharCode(encrypt)
    } else {
      newString += String.fromCharCode(encrypt)
    }
  }
  return newString
}

module.exports = caesarchiper
