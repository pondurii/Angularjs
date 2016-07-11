// Code goes here
// data binding using controllers

var mycontroller=function($scope){
  $scope.message="hello contoller thanks for binding this message to html page"
 
 
 var person = {
   
   fname : "bremmi",
   lname : "ponduri",
   img : "https://www.google.co.in/images/branding/product/ico/googleg_lodp.ico"
 } ;
 
 $scope.persionObj = person;
}