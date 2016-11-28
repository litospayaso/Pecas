/*global angular*/

angular.module("starter")
  .controller("semanas", ["$rootScope", "$scope", "$http", function ($rootScope, $scope,  $http) {
    "use strict";

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
