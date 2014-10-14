var express = require("express");
var app = express();
var mongoose = require("mongoose");
var jobModel = require("./models/Job");
var jobsData = require("./jobs-data");

app.set('views', __dirname + '/');
app.engine('.html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use(express.static( __dirname + '/public'))

app.use(express.bodyParser());

//api jobs
app.get('/api/jobs', function(req,res){
   
    jobsData.findJobs({})
        .then(function( coll){
        res.json(coll);
    });
});

app.post('/api/jobs', function(req,res){
   jobsData.saveJob({title:req.body.title, description:req.body.description})
   .then(function(){res.end();})
   /* jobsData.saveJob({title:req.body.title, description:req.body.description},
    function( err){
        res.json({ok:1});
    });*/
});

app.get('/api/jobs/clear', function(req,res){
    mongoose.model('Job').remove({}).then(function(err, coll){
        res.json({removed:true});
    });
});


//var jobsService = require("./jobs-service")(db,app);


app.get('*', function(req,res){
   res.render('index'); 
});



var uristring =
           process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            'mongodb://localhost/findjobs';

mongoose.connect(uristring);
var conn = mongoose.connection;

//conn.close();
conn.once('open', function(){
    console.info('We are connected to the MongoDB instance here!');
    jobModel.seedJobs();
    console.info('Seed data loaded or updated!');
    console.log('Done! waiting for requests ....')
});

app.listen(process.env.PORT, process.env.IP);