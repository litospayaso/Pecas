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
          if (elem.word.toLowerCase().replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u").indexOf($scope.search.toLowerCase().replace(/á/g, "a").replace(/é/g, "e").replace(/í/g, "i").replace(/ó/g, "o").replace(/ú/g, "u"))>=0){
            $scope.palabras.push(elem);
          }
        });
      });
    };
  }]);
