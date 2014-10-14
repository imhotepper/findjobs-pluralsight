 app = angular.module('app', ['ngResource']);

angular.module('app').controller('testCtrl', function($scope,$resource) {
    
    $scope.jobs = $resource('/api/jobs/').query();
    
    $scope.save = function(){
        
        console.log('saving ....');
        var job = {title:$scope.job.title, description:$scope.job.description};
        $scope.job = null;
         $scope.jobs.push(job);
          
      $resource('/api/jobs/').save(job);
        
       
    }
    
    /*$scope.jobs = [{
        title: 'Angular developer',
        description: 'a veri nice to be doing thing'
    }, {
        title: 'MVC developer',
        description: 'interesting and fast serverside fwk to create staff'
    }];*/

});