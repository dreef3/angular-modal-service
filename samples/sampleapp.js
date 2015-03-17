//  Build our app module, with a dependency on the angular modal service.
var app = angular.module('sampleapp', ['angularModalService']);

app.controller('SampleController', ['$scope', '$q', 'ModalService', function($scope, $q, ModalService) {
  
  $scope.yesNoResult = null;
  $scope.complexResult = null;
  $scope.customResult = null;

  $scope.showYesNo = function() {

    ModalService.showModal({
      templateUrl: "yesno/yesno.html",
      controller: "YesNoController"
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.yesNoResult = result ? "You said Yes" : "You said No";
      });
    });

  };

  $scope.showComplex = function() {

    ModalService.showModal({
      templateUrl: "complex/complex.html",
      controller: "ComplexController",
      inputs: {
        title: "A More Complex Example"
      }
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.complexResult  = "Name: " + result.name + ", age: " + result.age;
      });
    });

  };

  $scope.showCustom = function() {

    ModalService.showModal({
      templateUrl: "custom/custom.html",
      controller: "CustomController"
    }).then(function(modal) {
      modal.close.then(function(result) {
        $scope.customResult = "All good!";
      });
    });

  };

  $scope.showClose = function() {

    ModalService.showModal({
      templateUrl: "close/close.html",
      controller: "CloseController"
    }).then(function(modal) {
      modal.element.remodal({
        closeOnConfirm: false,
        closeOnEscape: false,
        CloseOnAnyClick: false
      }).open();
      modal.element.one('closed', function () {
        modal.closeFn();
      });
      modal.close.then(function(result) {
        $scope.closeResult = "All good!";
      });
    });

  };

}]);
