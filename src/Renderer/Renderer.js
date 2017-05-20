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
