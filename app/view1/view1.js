'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl',
    controllerAs: 'vm'
  });
}])

.controller('View1Ctrl', [function() {
  var vm = this;
  vm.todos = [{name:"make site", done: true}, {name: "profit"}];
  vm.createNewToDo = function(name){
   vm.todos.push({name: name});
    vm.newToDo = "";
  }
}]);