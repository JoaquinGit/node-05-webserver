const http = require('http');


http.createServer((req, res) => {

    //console.log(req);

    //Prueba Postman
  /*   res.writeHead(200, {'Content-Type': 'application/json'});
    const user = {
        id: 123,
        name: 'Fernando'
    }
    res.write(JSON.stringify(user)); */


    // Archivo CSV
    res.setHeader('Content-Disposition', 'attachment; filename=usuarios.csv');
    res.writeHead(200, {'Content-Type': 'application/csv'});
    res.write('id,name\n');
    res.write('123,Fernando\n');
    res.write('456,Marta');


    // Termina el proceso de respuesta
    res.end();

}).listen(3000);