// Code goes here

var createWorker = function() {

  var task1 = function() {
    console.log("this is task1 module");
  };
  
  var task2 = function() {
    console.log("this is task2 module");
  };

  return {
    job1: task1,
    job2: task2
  };
};

var worker = createWorker();
worker.job1();
worker.job2();