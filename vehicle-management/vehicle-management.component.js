angular.module('vehicleManagement').
  component('vehicleManagement', {
    templateUrl: 'vehicle-management/vehicle-management.template.html',
    controller: ['$rootScope', '$scope', '$routeParams', '$http', 'ModalData',
      function vehicleManagementController($rootScope, $scope, $routeParams, $http, ModalData) {
        var self = this;

        $scope.vehicle = null;
        $scope.displayAlert = {};
        $scope.displayAlert.statement = false;
        $scope.displayAlert.name = '';
        $scope.ModalData = ModalData;
        ModalData.showManagementModal = false;

        $scope.closeManagementModal = function () {
          ModalData.showManagementModal = false;
          $rootScope.modalActive = false;
        }

        ModalData.openManagementModal = function (id) {
          var getVehicles = JSON.parse(localStorage.getItem('vehicles'));
          $scope.vehicle = getVehicles[id];
          ModalData.showManagementModal = true;
          $rootScope.modalActive = true;
        }

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
