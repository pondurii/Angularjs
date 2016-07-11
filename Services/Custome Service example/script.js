//ng-model keeps data  live


(function() {

  var app = angular.module("githubview", []);
  var mycontroller = function(
    $scope, github, $interval, $log, $anchorScroll, $location) {

    var onUsercomplete = function(data) {
      $scope.user = data;

      github.getRepos($scope.user).then(onRepos, onError);
    }
    var onRepos = function(data) {
      $scope.repos = data;
      $location.hash("userDetails");
      $anchorScroll();

    }
    var onError = function(reason) {
      $scope.error = "could not find data";
    }

    $scope.search = function(username) {
      $log.info("searching for ", username);
     github.getUser(username).then(onUsercomplete, onError);

      if (countdowninterval) {
        $interval.cancel(countdowninterval);
        $scope.countdown = null;
      }

    }

    var countdowninterval = null;
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