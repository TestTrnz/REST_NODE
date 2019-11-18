const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json())
 
require('./app/routes/customer.routes.js')(app);
 
// Create a Server
const server = app.listen(8081, function () {
 
  const host = server.address().address
  const port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
 
})