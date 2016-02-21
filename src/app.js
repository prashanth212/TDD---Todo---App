'use strict';

var angular = window.angular;

var app = angular.module('myApp', []);
app.controller('todoCtrl', function ($scope) {
  $scope.todoList = [
    {
      taskName: 'Clean House',
      done: false
    }
  ];

  $scope.todoAdd = function () {
    $scope.todoList.push(
      {
        taskName: $scope.todoInput,
        done: false
      }
    );
    $scope.todoInput = "";
  };

  $scope.remove = function () {
    var oldList = $scope.todoList;
    $scope.todoList = [];
    angular.forEach(oldList, function (x) {
      if (!x.done) $scope.todoList.push(x);
    });
  };
});
