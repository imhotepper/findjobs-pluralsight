var app = angular.module('app', ['ngResource']);

app.controller('testCtrl', function($scope,$resource) {
    $scope.jobs = $resource('/api/jobs').query();
   
   /* 
    [{
        title: 'Angular developer',
        description: 'a veri nice to be doing thing'
    }, {
        title: 'MVC developer',
        description: 'interesting and fast serverside fwk to create staff'
    }];
    */

});