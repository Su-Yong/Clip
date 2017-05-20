let Angle = function (degree = 0) {
  this.degree = degree
  this.radian = degreeToRadian(degree)
}

Angle.prototype.setDegree = function (degree) {
  this.degree = degreePatch(degree)
  this.radian = degreeToRadian(this.degree)
}

Angle.prototype.setRadian = function (radian) {
  this.degree = degreePatch(radianToDegree(radian))
  this.radian = degreeToRadian(this.degree)
}

Angle.prototype.getDegree = function () {
  return this.degree
}
Angle.prototype.getRadian = function () {
  return this.radian
}

// limit degree (range -180 ~ 180)
// eg. 361˚ -> 1˚, 315˚ -> -45˚, 700˚ -> -20˚
function degreePatch (degree) {
  return degree % 360 > 180 ? 180 - (degree % 360) : (degree % 360)
}

function degreeToRadian (degree) {
  return Math.PI / 180 * degree
}

function radianToDegree (radian) {
  return 180 / Math.PI * radian
}

module.exports = Angle
