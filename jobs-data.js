var mongoose = require("mongoose");
var Promise = require("bluebird");

exports.findJobs = function(query){
   return mongoose.model('Job').find(query).exec();
    //return Promise.cast( mongoose.model('Job').find({}).exec());
}


exports.saveJob = function(newJob, cb){
    var Job = mongoose.model('Job');
   var j = new Job({title:newJob.title, description:newJob.description});
  // j.save(cb);
  
    return Promise.cast(j.save(),Job);
}

