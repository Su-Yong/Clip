let Util = {}

Util.clone = object => {
  if (object == null || typeof object != 'object')
    return object

  var copy = object.constructor()

  for (var attr in object) {
      if (object.hasOwnProperty(attr)) copy[attr] = object[attr]
  }

  return copy
}

module.exports = Util
