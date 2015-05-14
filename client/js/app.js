var qcmApp = angular.module('qcmApp', ['ngRoute', 'ngResource']);
  
qcmApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/create', {
        templateUrl: 'views/detail.html',
        controller: 'AddQcmController'
      }).
      when('/', {
        templateUrl: 'views/list.html',
        controller: 'ListQcmController'
      }).
      when('/qcm/:id/take', {
        templateUrl: 'views/take.html',
        controller: 'TakeQcmController'
      }).
      when('/qcm/:id/edit', {
        templateUrl: 'views/detail.html',
        controller: 'EditQcmController'
      }).
      when('/qcm/result', {
        templateUrl: 'views/result.html',
        controller: 'ResultQcmController'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);