/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

let Util = {
  isDebug: true
}

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


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

let Renderer = __webpack_require__(7)
let Level = __webpack_require__(4)
let Component = __webpack_require__(3)
let Texture = __webpack_require__(5)
let Vector2d = __webpack_require__(0)

window.addEventListener('load', function () {
  let canvas = document.getElementById('canvas')
  Renderer.setCanvas(canvas)

  let level = getLevel()
  Renderer.setLevel(level)

  setInterval(function () {
    Renderer.render()
  }, 10)
})

function getLevel () {
  let level = new Level()
  let c1 = new Component()
  let texture = new Texture('https://avatars3.githubusercontent.com/u/13764936?v=3&u=d80ca40c94de65b881e2c081236e01e9e25da2ff&s=400')

  texture.setOffset(new Vector2d(0, 0))
  texture.setSize(new Vector2d(50, 50))

  c1.setWidth(50)
  c1.setHeight(50)
  c1.setTexture(texture)

  level.addComponent(c1)

  return level
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

let Vector2d = __webpack_require__(0)
let Angle = __webpack_require__(6)
let Util = __webpack_require__(1)
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
  this.texture = texture.get()

  return this
}

Component.prototype.getID = function () {
  return this.id
}

Component.prototype.render = function (canvas) {
  canvas.save();
  canvas.translate(this.coord.getX() + this.size.getX() * 0.5, this.coord.getY() + this.size.getY() * 0.5);
  canvas.rotate(this.angle.getRadian());
  canvas.translate(-this.coord.getX() - this.size.getX() * 0.5, -this.coord.getY() - this.size.getY() * 0.5);
  canvas.drawImage(this.texture, this.coord.getX(), this.coord.getY(), this.size.getX(), this.size.getY());

  if(Util.isDebug) {
    canvas.strokeStyle = "#FF0000";
    canvas.lineWidth = 2;
    canvas.strokeRect(this.coord.getX(), this.coord.getY(), this.size.getX(), this.size.getY());
    console.log('ID: ' + this.getID() + ' coordX: ' + this.coord.getX() + ' coordY: ' + this.coord.getY() + ' sizeX: ' + this.size.getX() + ' sizeY: ' + this.size.getY())
  }

  canvas.restore();
}

module.exports = Component


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

let Util = __webpack_require__(1)

let Level = function () {
  this.components = []
  this.backup = []
}

Level.prototype.reload = function () {
  this.component = Util.clone(this.backup)
}

Level.prototype.addComponent = function (component) {
  this.components.push(component)
  this.backup = Util.clone(this.component)

  return this
}

Level.prototype.removeComponent = function (v) {
  let id = v

  if (typeof v === 'object') {
    id = v.getID()
  }

  this.component.forEach((e, i) => {
    if (e.getID() === id) {
      this.component.splice(i, 1)
      return
    }
  })
  this.backup = Util.clone(this.component)
}

Level.prototype.getComponents = function () {
  return this.components
}

module.exports = Level


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

let Vector2d = __webpack_require__(0)

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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

let Renderer = {
  canvas: null,
  level: null
}

Renderer.setCanvas = function (canvas) {
  this.canvas = canvas.getContext('2d')

  return this
}

Renderer.setLevel = function (level) {
  this.level = level

  return this
}

Renderer.render = function () {
  let components = this.level.getComponents()
  let length = components.length

  for (let i = 0; i < length; i++) {
    components[i].render(this.canvas)
  }
}

module.exports = Renderer


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2);


/***/ })
/******/ ]);