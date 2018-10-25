//we are requiring what is being exported from the express package. we put all of our requires at the top of the index.js file in node
const express = require('express');
const bodyParser = require('body-parser');
//you can shorthand requiring controllers by doing cc for cars controllers
const cc = require('./controllers/carsController')
//we need to invoke express and save it to a variable. That is our server object
const app = express()
//You can specify which port you want. between 3000 and 12000 is generally ok
const port = 3000;
//Top level middleware - this will run whenever a request comes into the server. It will parse the body and put it on req.body
app.use(bodyParser.json())

//These are our routes. We specify the endpoint first and then a callback function to invoke if an incoming request matches that route
app.get('/api/cars', cc.getCars)
app.post('/api/cars', cc.addCar)
app.put('/api/cars/:id', cc.editCar)
app.delete('/api/cars/:id', cc.deleteCar)

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})