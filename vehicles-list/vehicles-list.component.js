angular.module('vehiclesList').
  component('vehiclesList', {
    templateUrl: 'vehicles-list/vehicles-list.template.html',
    controller: [ '$http', '$scope',
      function vehiclesListController($http, $scope) {
        var self = this;
        $scope.selectedCar = null;

        $scope.closeList = function() {
          $scope.selectedCar = null;
        }

        $scope.selectCar = function(car) {
          console.log(car);
          $scope.selectedCar = car;
        }

        $http.get('data/vehicles.json').then(function(response) {
          self.vehicles = response.data;
        });
      }
    ]
  });