angular.module('VMS').
  config(['$locationProvider', '$routeProvider',
  function config($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
    when('/', {
      template: '<vehicles-list></vehicles-list>'
    }).
    when('/managment', {
      template: '<vehicle-managment></vehicle-managment>'
    }).otherwise('/')
  }
])