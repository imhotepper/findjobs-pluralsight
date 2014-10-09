var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require("../models/Job");
var Promise = require("bluebird");
var jobsData = require("../jobs-data");

var uristring =
            'mongodb://localhost/findjobs';



function resetJobs(){
    return new Promise(function(resolve, reject){
        mongoose.connection.collections['jobs'].drop(resolve, reject);
    });
    
}

var connectDB = Promise.promisify(mongoose.connect, mongoose);


describe("Job", function(){
    
    var jobs ;
    
    before(function(done){
          connectDB(uristring)
            .then(resetJobs)
            .then(jobModel.seedJobs)
            .then(jobsData.findJobs)
            .then(function( jobsCollection){
                    jobs = jobsCollection;
                    done();
                });   
    });
    
    it("should have data in MongoDB from seed", function(){
            expect(jobs.length).to.be.at.least(3);
            
    });
    
    it("should have a title", function(){
        var job = jobs[0];
       expect(job.title).to.not.be.null; 
       expect(job.description).to.not.be.null; 
    });
    
    it("should have a description", function(){
        var job = jobs[0];
       expect(job.description).to.not.be.empty; 
    });
    
});