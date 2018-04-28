angular.module('VMS', [
  'ngRoute',
  'vehiclesList',
  'vehicleDetails',
  'vehicleManagement'
]);

angular.module('VMS').
  factory('ModalData', function () {
    return {};
  });
