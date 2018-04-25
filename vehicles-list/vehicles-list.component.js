angular.module('vehiclesList').
  component('vehiclesList', {
    templateUrl: 'vehicles-list/vehicles-list.template.html',
    controller: [ '$rootScope', '$http', '$scope',
      function vehiclesListController($rootScope, $http, $scope) {
        var self = this;
        $scope.selectedCar = null;
        $scope.showDetailsModal = false;

        $scope.closeList = function() {
          $scope.selectedCar = null;
          $rootScope.modalActive = false;
          $scope.showDetailsModal = false;
        }

        $scope.selectCar = function(car) {
          $scope.selectedCar = car;
          $scope.showDetailsModal = true;
          $rootScope.modalActive = true;
        }

        if (localStorage.getItem('vehicles')) {
          console.log('found a match in localStorage!');
          self.vehicles = JSON.parse(localStorage.getItem('vehicles'));
        } else {
          console.log('localStorage is empty!');
          $http.get('data/vehicles.json').then(function(response) {
            localStorage.setItem('vehicles', JSON.stringify(response.data));
            self.vehicles = response.data;
          });
        }
      }
    ]
  });