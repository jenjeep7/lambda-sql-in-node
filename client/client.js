var app = angular.module('app', []);

app.controller('PersonController', ['$http', function($http){
  var controller = this;
  controller.name = '';
  controller.address = '';
  controller.city = '';
  controller.state= '';
  controller.zip_code='';
  controller.allPeople= [];

  controller.getData = function(){
    $http.get("/people").then(function(response){
      console.log("received data");
      console.log(response);
      controller.allPeople = response.data;
      console.log("new", controller.allPeople);
    });
  };


  controller.sendData = function() {
    $http.post('/people', {name: controller.name, address: controller.address, city: controller.city, state: controller.state, zip_code: controller.zip_code})
      .then(function(serverResponse){
        console.log(serverResponse);
      });
      controller.getData();
  };
}]);
