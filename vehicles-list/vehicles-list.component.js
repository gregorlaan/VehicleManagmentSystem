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