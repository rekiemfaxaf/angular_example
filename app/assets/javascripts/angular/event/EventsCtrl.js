var app = angular.module('angularExample');

app.controller('EventsCtrl', ['$scope', 'Event', function($scope, Event) {
  $scope.events = Event.query();
  
  $scope.addEvent = function() {
      if (!valid()) { return false; }

      Event.save($scope.event,
        function(response, _headers) {
          $scope.events.push(response);
        },
        function(response) {
          alert('Errors: ' + response.data.errors.join('. '));
        }
      );

      $scope.event = {};
    };
}]);
