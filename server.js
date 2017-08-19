// Inicialización
var express  = require('express');
var app      = express(); 					// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 8090; 			// elegimos el puerto 8090

// Configuracion
mongoose.connect('mongodb://localhost:27017/MeanExample'); 	// Hacemos la conexión a la base de datos de Mongo con nombre "MeanExample"

app.configure(function() {
	app.use(express.static(__dirname + '/angular')); 		
	app.use(express.logger('dev')); 			// activamos el log en modo 'dev'
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// Cargamos los endpoints
require('./app/routes.js')(app);

//el puerto para escuchar
app.listen(port);
console.log("APP por el puerto " + port);