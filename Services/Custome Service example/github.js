(function() {


  var github = function($http) {


    var getuser = function(username) {
      return $http.get("https://api.github.com/users/" + username).then(function(responce) {
        return responce.data;
      });

    };

    var getrepos = function(user) {
      return $http.get(user.repos_url).then(function(responce) {
        return responce.data;
      });

    };

    return {
      getUser: getuser,
      getRepos: getrepos

    };
  };

  var module = angular.module("githubview");
  module.factory("github", github);

}());