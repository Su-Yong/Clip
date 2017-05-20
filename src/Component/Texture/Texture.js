let Vector2d = require('../../Math/Vector.js')

let Texture = function (url) {
  this.url = url
  this.size = new Vector2d(0, 0)
  this.offset = new Vector2d(0, 0)
}

Texture.prototype.setImage = function (url) {
  this.url = url

  return this
}

Texture.prototype.setOffset = function (vector) {
  this.offset = vector

  return this
}
Texture.prototype.setX = function (x) {
  this.offset.setX(x)

  return this
}
Texture.prototype.setY = function (y) {
  this.offset.setY(y)

  return this
}

Texture.prototype.setSize = function (vector) {
  this.size = vector

  return this
}
Texture.prototype.setWidth = function (width) {
  this.offset.setX(width)

  return this
}
Texture.prototype.setHeight = function (height) {
  this.offset.setY(height)

  return this
}

Texture.prototype.get = function () {
  let image = new Image(this.size.getX(), this.size.getY())
  image.src = this.url

  return image
}

module.exports = Texture
