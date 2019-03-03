// importing modules
var express = require("express");
var mongoose = require("mongoose");
var bodyparser =require("body-parser");
var cors  = require("cors");
var path = require("path");

var app =express();

const route =require("./routes/route");

//connect to mongodb
mongoose.connect('mongodb://localhost:27017/myExpressApp',{ useNewUrlParser: true });

//on connection
mongoose.connection.on('connected',function(){
    console.log("connected to database moongodb @27017");
});

mongoose.connection.on('error',function(err){
    if(err){
        console.log("error in db connection" +err);
    }
});

//port no
const port = 3000;

//adding Middleware --cors
app.use(cors());

//body-parser
app.use(bodyparser.json());

//static files
app.use(express.static(path.join(__dirname,'publicTest')));

app.use("/api",route);

//testing
app.get('/test', function(req,res){
res.send(" i am test");
});

app.listen(port,function(){
    console.log("server started at Port" +port);
})