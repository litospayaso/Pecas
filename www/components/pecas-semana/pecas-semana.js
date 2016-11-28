/*global angular*/

angular.module("starter")
  .controller("semana", ["$rootScope", "$scope", "$http", "$location", function ($rootScope, $scope,  $http, $location) {
    "use strict";
    var contacts = [];
    $scope.contactList = [];

    var weekId = $location.path().split('/').pop();
    $scope.words = $rootScope.weeks[weekId].words;

    $scope.find = function () {
      $scope.contactList=[];
      contacts.forEach(function (element) {
        if (element.name.toLowerCase().indexOf($scope.search.toLowerCase())>=0 ||
          element.phone.toLowerCase().indexOf($scope.search.toLowerCase())>=0){
          $scope.contactList.push(element);
        }
      });
    };

  }]);
