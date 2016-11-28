/*global angular*/

angular.module("starter")
  .controller("buscador", ["$rootScope", "$scope", "$http", "$location", function ($rootScope, $scope,  $http, $location) {
    "use strict";
    var palabras = [];
    $scope.palabras = [];

    // $scope.words = $rootScope.weeks[weekId].words;

    $scope.find = function (){
      $scope.palabras = [];
      if($scope.search==="")
        return;
      $rootScope.weeks.forEach(function (element) {
        element.words.forEach(function (elem){
          if (elem.word.toLowerCase().indexOf($scope.search.toLowerCase())>=0){
            $scope.palabras.push(elem);
          }
        });
      });
    };
  }]);
