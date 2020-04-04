// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express=require('express');
// Start up an instance of app
const app=express();
/* Middleware*/
const bodyParser=require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));
// Setup Server
const port=3000;
const server=app.listen(port,startServer);
function startServer()
{
    console.log('hey, server is started');
}
/* to enroute the post requests */
app.post('/all',function(req,res)
{
    //console.log(req.body);
    newEntry={
      temperature:req.body.temprature,
      date:req.body.date,
      userResponse:req.body.userResponse,
    };
    projectData.push(newEntry);
    res.send(projectData);
});

/* get code to send data */
app.get('/getData',function(req,res){

    res.send(projectData);
});