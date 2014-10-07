var express = require("express");
var app = express();
var mongoose = require("mongoose");
var jobModel = require("./models/Job");

app.set('views', __dirname + '/');
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static( __dirname + '/public'))

//api jobs
app.get('/api/jobs', function(req,res){
    mongoose.model('Job').find({}).sort({title:1}).exec(function(err, coll){
        res.json(coll);
    });
});


app.get('*', function(req,res){
   res.render('index'); 
});

var uristring =
            process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            'mongodb://localhost/findjobs';

mongoose.connect(uristring);
var conn = mongoose.connection;
conn.once('open', function(){
    console.info('We are connected to the MongoDB instance here!');
    jobModel.seedJobs();
    console.info('Seed data loaded or updated!');
});

app.listen(process.env.PORT, process.env.IP);