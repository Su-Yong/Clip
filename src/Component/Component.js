let Vector2d = require('../Math/Vector.js')
let Angle = require('../Math/Angle.js')

let Component = function (id = (new Date()).getTime()) {
  this.id = id

  this.coord = new Vector2d(0, 0)
  this.size = new Vector2d(1, 1)
  this.angle = new Angle(0)

  this.maxXPoint = 0
  this.minXPoint = 0
  this.maxYPoint = 0
  this.minYPoint = 0

  this.texture = null
}

Component.prototype.setCoord = function (vector) {
  this.coord = vector

  return this
}
Component.prototype.setX = function (x) {
  this.coord.setX(x)

  return this
}
Component.prototype.setY = function (y) {
  this.coord.setY(y)

  return this
}

Component.prototype.getCoord = function () {
  return this.coord
}
Component.prototype.getX = function () {
  return this.coord.getX()
}
Component.prototype.getY = function () {
  return this.coord.getY()
}

Component.prototype.setSize = function (vector) {
  this.size = vector

  return this
}
Component.prototype.setWidth = function (width) {
  this.size.setX(width)

  return this
}
Component.prototype.setHeight = function (height) {
  this.size.setY(height)

  return this
}

Component.prototype.getSize = function () {
  return this.size
}
Component.prototype.getWidth = function () {
  return this.size.getX()
}
Component.prototype.getHeight = function () {
  return this.size.getY()
}

Component.prototype.setTexture = function (texture) {
  this.texture = texture

  return this
}

module.exports = Component
