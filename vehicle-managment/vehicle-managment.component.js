angular.module('vehicleManagment').
  component('vehicleManagment', {
    templateUrl: 'vehicle-managment/vehicle-managment.template.html',
    controller: ['$scope', '$routeParams', '$http',
      function vehicleManagmentController($scope, $routeParams, $http) {
        var self = this;

        self.vehicleId = $routeParams.vehicleId;
        $scope.vehicle = null;

        var getVehicles = JSON.parse(localStorage.getItem('vehicles'));
        $scope.vehicle = getVehicles[self.vehicleId];

        $scope.saveChanges = function (vehicle, formValidation) {
          if (formValidation.$valid) {
            console.log('form is valid.');
            var newData = vehicle;
            var currentData = JSON.parse(localStorage.getItem('vehicles'));
            currentData[self.vehicleId] = newData;
            localStorage.setItem('vehicles', JSON.stringify(currentData));
          } else {
            console.log('Form is not valid.');
          }
        }
      }
    ]
  });