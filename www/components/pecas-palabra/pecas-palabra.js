/*global angular*/

angular.module("starter")
  .controller("palabra", ["$rootScope", "$scope", "$location", function ($rootScope, $scope,  $location) {
    "use strict";

    var parameters = $location.path().split('/');
    var word = parameters.pop();
    var videoId = parameters.pop();
    var html = '<video autoplay="" loop="" preload="auto" data-setup="{}"> <source src="https://crossorigin.me/https://media.spreadthesign.com/video/mp4/5/'+videoId+'.mp4" type="video/mp4"></video>'

    $scope.videoId = videoId;
    $scope.word = word;
    $('#videoContainer').html(html);
  }]);
