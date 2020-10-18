function validatePassword(password) {
  var i = 0

  var character = ''
  var isLower = false
  var isUpper = false
  var isNumeric = false
  var isSpecial = false

  if (password.length < 8) {
    return false
  }

  while (i < password.length) {
    character = password.charAt(i)

    if (isLetter(character) && character == character.toLowerCase()) {
      isLower = true
    }

    if (isLetter(character) && character == character.toUpperCase()) {
      isUpper = true
    }

    if (!isNaN(character)) {
      isNumeric = true
    }

    if (!isLetter(character) && isNaN(character)) {
      isSpecial = true
    }

    i++
  }

  if (isLower && isUpper && isNumeric && isSpecial) {
    return true
  } else {
    return false
  }
}

function isLetter(character) {
  if (character.toUpperCase() == character.toLowerCase()) {
    return false
  }

  return true
}

module.exports = validatePassword
