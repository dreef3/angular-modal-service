var app = angular.module('sampleapp');

app.controller('CloseController', ['$scope', 'close', function($scope, close) {
  $scope.save = function() {
 	  close();
 };

}]);
