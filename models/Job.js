var mongoose = require("mongoose");

var jobSchema = mongoose.Schema({
    title:{type:String},
    description:{type:String}
});

var Job =  mongoose.model('Job', jobSchema);

exports.seedJobs = function(){
    Job.findOne({},function(err,aJob){
        if(!aJob){
            Job.create({title:'C# Developer', description:'Working with C# on a web based project for a comp!'});
            Job.create({title:'AngularJS Developer', description:'Working with AngularJS on a web based project for a comp!'});
            Job.create({title:'MVC Developer', description:'Working with Asp.Net MVC 6 on a web based project for a comp!'});
            
        }
    });
};