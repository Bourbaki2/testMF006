'use strict';

angular.module('yoAngular006App', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/route001', {
        templateUrl: 'views/route001.html',
        controller: 'Route001Ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
