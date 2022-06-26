function minimal(array) {
  var min = array[0]
  for (let i = 0; i <= array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
  }
  return min
}

function maximum(array) {
  var max = array[0]
  for (let i = 0; i <= array.length; i++) {
    if (array[i] > max) {
      max = array[i]
    }
  }
  return max
}

function average(array) {
  let total = array.reduce((prevValue, e) => prevValue + e, 0)
  return total / array.length
}

function length(array) {
  {
    return array.length
  }
}

function analyzearray(arr) {
  const object = {
    min: minimal(arr),
    max: maximum(arr),
    avg: average(arr),
    len: length(arr)
  }
  return object
}

module.exports = analyzearray
