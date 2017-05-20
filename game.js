let Renderer = require('./src/Renderer/Renderer.js')
let Level = require('./src/Component/Level.js')
let Component = require('./src/Component/Component.js')
let Texture = require('./src/Component/Texture/Texture.js')
let Vector2d = require('./src/Math/Vector.js')

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
