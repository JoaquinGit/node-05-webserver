require('dotenv').config();  // importa dependencia dotenv para usar archivo de configuración .env
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Muestra página web
app.use(express.static(__dirname + '/public'));
 

//*******************/
app.get('/', function (req, res) {
  res.send('Hola Mundo')
})

app.get('/usuarios', function (req, res) {
    res.send('Usuario: Fernando')
})

app.post('/', function (req, res) {
    res.send('POST del path /')
})
//***************/

// Puerto de escucha
app.listen(port, () => {
  console.log(`Server started - Port ${port}`);
});