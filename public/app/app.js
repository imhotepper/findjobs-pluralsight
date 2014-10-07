var app = angular.module('app', []);

app.controller('testCtrl', function($scope) {
    $scope.jobs = [{
        title: 'Angular developer',
        description: 'a veri nice to be doing thing'
    }, {
        title: 'MVC developer',
        description: 'interesting and fast serverside fwk to create staff'
    }];

});