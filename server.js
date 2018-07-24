//Dependencias
const express = require('express');
const app = express();
const hbs = require('hbs');

//Puerto web
const port = process.env.PORT || 3000;

//Cargar los helpers
require('./hbs/helpers');

//Servir contenido en la carpeta public
app.use(express.static( __dirname + '/public' ));

//Express HBS Engine
hbs.registerPartials( __dirname + '/views/partials');
app.set('view engine', 'hbs');

//Variables
const datos = {
	nombre: 'nelson cadenas',
	card1: 'Card 1',
	card2: 'Card 2',
	card3: 'Card 3'
}

//Rutas
app.get('/', (req, res) => {

	res.render('home', datos);

})

app.get('/about', (req, res) => {

	res.render('about', datos);

})
 
//Activar escucha por el puerto 3000
app.listen(port,() => {
	console.log(`Escuchando por el puerto ${ port }`);
})