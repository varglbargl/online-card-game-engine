var app = angular.module('cardGame', ['ngRoute', 'btford.socket-io'])
.config(['$routeProvider', function ($routeProvider) {
  // all of these just append to <div ng-view> in index.html
  $routeProvider.when('/', {
    controller: 'GameMenuController',
    templateUrl: 'templates/menu.html'
  }).when('/game/space/:id', {
    controller: 'SpaceGameController',
    templateUrl: 'templates/space.html'
  }).when('/404', {
    templateUrl: 'templates/404.html'
  })
  .otherwise({redirectTo: '/404'});
}]);

app.run(function ($rootScope) {
  $rootScope.title = "Presentaur";
  $rootScope.id = '';
});