var app = angular.module('angularExample');

app.factory('Event', ['$resource', function($resource) {
  return $resource('/api/events/:id.json', { id: '@id' });
}]);
