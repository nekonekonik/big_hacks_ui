'use strict';

/**
 * @ngdoc overview
 * @name bigHacksUiApp
 * @description
 * # bigHacksUiApp
 *
 * Main module of the application.
 */
angular
  .module('bigHacksUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-timeline',
    'angular-scroll-animate',
    'emguo.poller'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
