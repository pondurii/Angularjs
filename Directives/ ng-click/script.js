
//ng-model keeps data  live


(function() {

  var app = angular.module("githubview", []);
  var mycontroller = function($scope, $http) {

    var onUsercomplete = function(responce) {
      $scope.user = responce.data;
    }
    var onError = function(reason) {
      $scope.error = "could not find user";
    }
    
    $scope.search = function(username){
      $http.get("https://api.github.com/users/"+username).then(onUsercomplete, onError);
    }
    
    
    $scope.message = "Git hub Viewr"
    
    
    
    
      $scope.username ="angular";
    
  };
  
    

  app.controller("mycontroller", mycontroller);
}());