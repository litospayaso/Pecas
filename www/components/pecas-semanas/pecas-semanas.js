/*global angular*/

angular.module("starter")
  .controller("semanas", ["$rootScope", "$scope", "$http", function ($rootScope, $scope,  $http) {
    "use strict";

    $scope.doRefresh = function (){
      $http({
        method: 'GET',
        url: 'https://raw.githubusercontent.com/litospayaso/Pecas/master/www/database/database.json'
      }).then(function successCallback(response) {
        $rootScope.connecting=false;
        $rootScope.weeks = response.data;
        localStorage.setItem("databaseCookie", JSON.stringify(response.data));
      }, function errorCallback(response) { //Error case not connection available
        if (JSON.parse(localStorage.getItem("databaseCookie")) != null){
          var databaseCookie = JSON.parse(localStorage.getItem("databaseCookie"));
          $rootScope.connecting=false;
          $rootScope.weeks = response.data;
        }else{
          $rootScope.connecting=false;
          $rootScope.weeks = [];
          $rootScope.ConnectionError = true;
        }
      });
      $scope.$broadcast('scroll.refreshComplete');
    };

    $scope.find = function () {
      $scope.contactList=[];
      contacts.forEach(function (element) {
        if (element.name.toLowerCase().indexOf($scope.search.toLowerCase())>=0 ||
          element.phone.toLowerCase().indexOf($scope.search.toLowerCase())>=0){
          $scope.contactList.push(element);
        }
      });
    };

  }])

  .config( [
    '$compileProvider',
    function( $compileProvider )
    {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|chrome-extension):/);
      // Angular before v1.2 uses $compileProvider.urlSanitizationWhitelist(...)
    }
  ]);