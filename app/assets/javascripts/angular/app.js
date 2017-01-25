var app = angular.module('angularExample', ['ngResource']);

app.controller('EventsCtrl', ['$scope', function($scope) {
  $scope.events = [
    { name: 'Event 1', event_date: '01/10/2016', description: 'Description #1', place: 'Place #1'},
    { name: 'Event 2', event_date: '02/10/2016', description: 'Description #2', place: 'Place #2'},
    { name: 'Event 3', event_date: '03/10/2016', description: 'Description #3', place: 'Place #3'},
    { name: 'Event 4', event_date: '04/10/2016', description: 'Description #4', place: 'Place #4'},
    { name: 'Event 5', event_date: '05/10/2016', description: 'Description #5', place: 'Place #5'}
  ];


  $scope.addEvent = function() {
    if (!valid()) {
      return false;
    }

    $scope.events.push({
      name: $scope.event.name,
      event_date: $scope.event.event_date,
      description: $scope.event.description,
      place: $scope.event.place
    });

    $scope.event.name = '';
    $scope.event.description = '';
    $scope.event.event_date = '';
    $scope.event.place = '';
  };

  valid = function() {
    return !!$scope.event &&
      !!$scope.event.name && !!$scope.event.event_date &&
      !!$scope.event.description && !!$scope.event.place;
  }
}]);
