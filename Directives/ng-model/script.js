
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
    $http.get("https://api.github.com/users/pondurii").then(onUsercomplete, onError);
    $scope.message = "hello contoller thanks for binding this message to html page"
    
    
    
    
      $scope.username ="angular";
    
  };
  
    

  app.controller("mycontroller", mycontroller);
}());