var mongoose = require("mongoose");
var Promise = require("bluebird");

var jobSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

var Job =  mongoose.model('Job', jobSchema);

var jobs = [
        {title:'C# Developer', description:'Working with C# on a web based project for a comp!'},
        {title:'AngularJS Developer', description:'Working with AngularJS on a web based project for a comp!'},
        {title:'MVC Developer', description:'Working with Asp.Net MVC 6 on a web based project for a comp!'}
    ];

var createJob = Promise.promisify(Job.create, Job);

function findJobs(query){
   return Promise.cast( mongoose.model('Job').find(query).exec());
}

exports.seedJobs = function(){
      return  findJobs({})
                .then(function(collection){
                    console.log('daya: ' + collection.length);
                    if (collection.length === 0){
                      return  Promise.map(jobs,function(job){
                          return createJob(job);
                      })
                    }
                });
        
      
};