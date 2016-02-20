(function () {

  'use strict';

  var angular = window.angular,
    expect = window.chai.expect,
    inject = angular.mock.inject,
    module = angular.mock.module,
    sinon = window.sinon;

  describe('ToDo App', function () {
    var $compile,
      $controller,
      $scope,
      todoCtrl,
      sandbox;

    beforeEach(function () {

      sandbox = sinon.sandbox.create();

      module('myApp');

      inject(
        function (
          _$q_,
          _$rootScope_,
          _$controller_,
          _$compile_
        ) {
          $scope = _$rootScope_.$new();
          $compile = _$compile_;
          $controller = _$controller_;

          todoCtrl = $controller('todoCtrl', {
            $scope: $scope
          });
        });

    });

    afterEach(function () {

      sandbox.restore();

    });

    describe('When the controller is instantiated', function () {

      it('should have the todoList', function () {

        var todoList = [
          {
            todoText: 'Clean House',
            done: false
          }
        ];

        expect($scope.todoList[0].todoText).to.equal(todoList[0].todoText);

      });

    });

  });

}());
