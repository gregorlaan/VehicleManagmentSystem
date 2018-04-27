angular.module('vehicleManagement').
  component('vehicleManagement', {
    templateUrl: 'vehicle-management/vehicle-management.template.html',
    controller: ['$scope', '$routeParams', '$http', 'ModalData',
      function vehicleManagmentController($scope, $routeParams, $http, ModalData) {
        var self = this;

        self.vehicleId = $routeParams.vehicleId;
        $scope.vehicle = null;
        $scope.displayAlert = {};
        $scope.displayAlert.statement = false;
        $scope.displayAlert.name = '';
        $scope.ModalData = ModalData;

        var getVehicles = JSON.parse(localStorage.getItem('vehicles'));
        $scope.vehicle = getVehicles[self.vehicleId];

        $scope.saveChanges = function (vehicle, formValidation) {
          if (confirm('Are you sure you want to save changes?') && formValidation.$valid) {
            console.log('form is valid.');
            var newData = vehicle;
            var currentData = JSON.parse(localStorage.getItem('vehicles'));
            currentData[self.vehicleId] = newData;
            localStorage.setItem('vehicles', JSON.stringify(currentData));
            $scope.displayAlert.statement = true;
            $scope.displayAlert.type = 'alert-primary';
            $scope.displayAlert.name = 'Data successfully changed!';
          } else {
            console.log('No Confirmation or Form is not valid.');
            $scope.displayAlert.statement = true;
            $scope.displayAlert.type = 'alert-danger';            
            $scope.displayAlert.name = 'Data not changed!';
          }
        }
      }
    ]
  });