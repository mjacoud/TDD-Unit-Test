function capitalize(word) {
  if (
    word.charAt(0) === ' ' ||
    isNaN(word.charAt(0)) === false ||
    word.charAt(0).match(/\W+/g)
  ) {
    return 'Error'
  } else {
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
}
module.exports = capitalize
