angular.module('vehicleDetails').
  component('vehicleDetails', {
    templateUrl: 'vehicle-details/vehicle-details.template.html',
    controller: [ '$rootScope', '$scope', 'ModalData',
      function vehicleDetailsController($rootScope, $scope, ModalData) {
        var self = this;

        $scope.ModalData = ModalData;
        ModalData.showDetailsModal = false;

        $scope.closeDetailsModal = function() {
          ModalData.showDetailsModal = false;
          $rootScope.modalActive = false;
        }

        ModalData.openDetailsModal = function(car) {
          $scope.selectedCar = car;
          ModalData.showDetailsModal = true;
          $rootScope.modalActive = true;
        }

      }
    ]
  });
