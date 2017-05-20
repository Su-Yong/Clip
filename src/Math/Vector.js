let Vector2d = function (x = 0, y = 0) {
  this.x = x
  this.y = y
}

Vector2d.prototype.add = function (x, y) {
  if (y == null) {
    this.x += x.getX()
    this.y += x.getY()
  } else {
    this.x += x
    this.y += y
  }

  return this
}

Vector2d.prototype.sub = function (x, y) {
  if (y == null) {
    this.x -= x.getX()
    this.y -= x.getY()
  } else {
    this.x -= x
    this.y -= y
  }

  return this
}

Vector2d.prototype.multiple = function (value) {
  this.x *= value
  this.y *= value

  return this
}

Vector2d.prototype.normalize = function () {
  let length = Math.hypot(this.x, this.y)

  this.x /= length
  this.y /= length

  return this
}

Vector2d.prototype.setX = function (x) {
  this.x = x

  return this
}

Vector2d.prototype.setY = function (y) {
  this.y = y

  return this
}

Vector2d.prototype.getX = function () {
  return this.x
}

Vector2d.prototype.getY = function () {
  return this.y
}

module.exports = Vector2d
