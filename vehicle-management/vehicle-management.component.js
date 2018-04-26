angular.module('vehicleManagement').
  component('vehicleManagement', {
    templateUrl: 'vehicle-management/vehicle-management.template.html',
    controller: ['$scope', '$routeParams', '$http',
      function vehicleManagmentController($scope, $routeParams, $http) {
        var self = this;

        self.vehicleId = $routeParams.vehicleId;
        $scope.vehicle = null;
        $scope.displayAlert = false;

        var getVehicles = JSON.parse(localStorage.getItem('vehicles'));
        $scope.vehicle = getVehicles[self.vehicleId];

        $scope.saveChanges = function (vehicle, formValidation) {
          if (formValidation.$valid) {
            console.log('form is valid.');
            var newData = vehicle;
            var currentData = JSON.parse(localStorage.getItem('vehicles'));
            currentData[self.vehicleId] = newData;
            localStorage.setItem('vehicles', JSON.stringify(currentData));
            $scope.displayAlert = true;
          } else {
            console.log('Form is not valid.');
          }
        }
      }
    ]
  });