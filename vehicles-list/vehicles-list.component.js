angular.module('vehiclesList').
  component('vehiclesList', {
    templateUrl: 'vehicles-list/vehicles-list.template.html',
    controller: [ '$http',
      function vehiclesListController($http) {}
    ]
  });