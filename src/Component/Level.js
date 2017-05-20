let Util = require('../Util.js')

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
