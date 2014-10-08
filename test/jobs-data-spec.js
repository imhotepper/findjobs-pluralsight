var expect = require("chai").expect;
var mongoose = require("mongoose");
var jobModel = require("../models/Job");

var uristring =
            process.env.MONGOLAB_URI ||
            process.env.MONGOHQ_URL ||
            'mongodb://localhost/findjobs';

mongoose.connect(uristring);

//clear db so that we are sure the seed will be executed
function resetJobs(next){
    mongoose.connection.collections['jobs'].drop(next);
}


describe("Job", function(){
    it("should have data in MongoDB from seed", function(done){
        //this.timeout(6000);
        resetJobs(function(){
            jobModel.seedJobs(function(){
                mongoose.model('Job').find({}).exec(function(err, data){
                    console.log(data);
                    expect(data.length).to.be.at.least(1);
                    done();
                });     
                
            });
               
        });
        
    });
});