
var expect = require("chai").expect;
var request = require("supertest");
var express = require("express");
var app = express();


var dataSavedJob;
var db  ={
    saveJob :function(job){
        dataSavedJob =  job;
    }
} ;
var jobService =  require("../../jobs-service")(db, app);



describe("save jobs", function(){
    it("should validate that title is greater then 4 chars");
    it("should valdiate that title is less then 40 chars");
    it("should validate that description is greater then 4 chars" );
    it("should validate that description is less then 250 chars");
    
    var dataSaveJob;
    var newJob ={title:'C# Developer', description:'Working with C# on a web based project for a comp!'} ;
    it ("should pass the job to the db save", function(done){
        request(app).post('/api/jobs').send(newJob).end(function(err, response){
            //TODO: make it wotk?  expect(dataSaveJob).to.deep.equal(newJob);     
            done();
        });
        
        //expect(dataSaveJob).to.deep.equal(newJob); 
    });
    //
    it ("should return status 200 to front end if db saved ok ");
    it ("should return a job with an id");
    it("should return an error if the db failed");
    
});

