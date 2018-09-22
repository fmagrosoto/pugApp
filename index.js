const express = require('express')
const app = express()
const PORT = (process.env.PORT) ? process.env.PORT : 8080;

// Configurar PUG como un view template
app.set('view engine', 'pug')

// Rutas
app.get('/', function (req, res) {
  let variables = {
    'titulo': 'Este es mi primer templete usando Pug',
    'frutas': ['manzana', 'plátano', 'pera', 'mango', 'sandía']
  }
  res.render('index', variables)
})

// Redireccionar
app.get('/fernando/magrosoto', function (req, res) {
  res.redirect('/')
})

// Rescatar datos desde la URL
app.get('/inventario/:producto/:modelo', function (req, res) {
  let producto = req.params.producto
  let modelo = req.params.modelo
  let mensaje = `Estás viendo el producto: ${producto} y el modelo: ${modelo}`
  res.send(mensaje)
})

// Inicializar el servidor
app.listen(PORT, function () {
  console.log(`Servidor corriendo en el puerto: ${PORT}`)
})