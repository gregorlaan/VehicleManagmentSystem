angular.module('vehiclesList').
  component('vehiclesList', {
    templateUrl: 'vehicles-list/vehicles-list.template.html',
    controller: [ '$http',
      function vehiclesListController($http) {
        var self = this;
        
        $http.get('data/vehicles.json').then(function(response) {
          self.vehicles = response.data;
        });
      }
    ]
  });