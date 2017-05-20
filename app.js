let express = require('express')
let app = express()

app.set('views', __dirname)
app.set('view engine', 'pug')
app.use('', express.static(__dirname));

let server = app.listen(8000, () => {
  console.log('Server open')
})

app.get('/', (req, res) => {
  res.render('index.pug')
})
