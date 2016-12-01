// Ionic Starter App

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.Semanas', {
    url: '/Semanas/',
    views: {
      'menuContent': {
        templateUrl: 'components/pecas-semanas/pecas-semanas.html'
      }
    }
  })

    .state('app.Semana', {
    url: '/Semana/:id',
    views: {
      'menuContent': {
        templateUrl: 'components/pecas-semana/pecas-semana.html'
      }
    }
  })

    .state('app.Palabra', {
    url: '/Palabra/:id/:word',
    views: {
      'menuContent': {
        templateUrl: 'components/pecas-palabra/pecas-palabra.html'
      }
    }
  })

    .state('app.Buscador', {
    url: '/Buscador/',
    views: {
      'menuContent': {
        templateUrl: 'components/pecas-buscador/pecas-buscador.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/Semanas/');
});

angular.module("starter")
  .controller("indexController", ["$rootScope", "$scope", "$location", "$http", function ($rootScope, $scope, $location, $http) {
    "use strict";

    $scope.moveScreen = function (targetScreen) {
      $location.path(targetScreen);
    };

    // $http.get('database/database.json').success(function (data) {
    //   $rootScope.weeks = data;
    //  });

    $rootScope.connecting = true;

    $http({
      method: 'GET',
      url: 'https://raw.githubusercontent.com/litospayaso/Pecas/master/www/database/database.json'
    }).then(function successCallback(response) {
      $rootScope.connecting=false;
      $rootScope.weeks = response.data;
    }, function errorCallback(response) { //Error case not connection available
      $rootScope.connecting=false;
      $rootScope.weeks = [];
      $rootScope.ConnectionError = true;
    });

  }]);

