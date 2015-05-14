'use strict';

angular.module('qcmApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  });