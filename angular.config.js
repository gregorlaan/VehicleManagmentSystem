angular.module('VMS').
  config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/', {
      template: '<vehicles-list></vehicles-list>'
    }).
    when('/management/:vehicleId', {
      template: '<vehicle-management></vehicle-management>'
    }).otherwise('/')
  }
])