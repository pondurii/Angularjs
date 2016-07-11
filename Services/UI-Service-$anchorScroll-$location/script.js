//ng-model keeps data  live


(function() {

  var app = angular.module("githubview", []);
  var mycontroller = function(
    $scope, $http, $interval, $log, $anchorScroll, $location) {

    var onUsercomplete = function(responce) {
      $scope.user = responce.data;

      $http.get($scope.user.repos_url).then(onRepos, onError);
    }
    var onRepos = function(responce) {
      $scope.repos = responce.data;
      $location.hash("userDetails");
      $$anchorScroll();
      
    }
    var onError = function(reason) {
      $scope.error = "could not find data";
    }

    $scope.search = function(username) {
      $log.info("searching for ",username);
      $http.get("https://api.github.com/users/" + username).then(onUsercomplete, onError);
      
      if(countdowninterval){
        $interval.cancel(countdowninterval);
        $scope.countdown =null;
      }
      
    }

var  countdowninterval= null;
    var startCountDown = function() {
     countdowninterval = $interval(decreamentCount, 1000, $scope.countdown)
    }
  
    var decreamentCount = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
       
      }
    };

    $scope.message = "Git hub Viewr"
    $scope.username = "angular";
    $scope.sortOrder = "-stargazers_count";
    $scope.countdown = 5;
    startCountDown();
  };

  app.controller("mycontroller", mycontroller);
}());