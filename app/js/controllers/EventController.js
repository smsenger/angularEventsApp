'use strict';

eventsApp.controller('EventController',
  function EventController($scope, eventData, $anchorScroll) {
    $scope.sortorder = 'name';
    eventData.getEvent()
      .$promise
      .then(function (event) { $scope.event = event; })
      .catch(function (response) { console.log(response); }
      );

    $scope.upVoteSession = function (session) {
      session.upVoteCount++;
    };

    $scope.downVoteSession = function (session) {
      session.upVoteCount--;
    }


    //anchorScroll scrolls to id (labelled in html) that matches what's in the url hash sign
    $scope.scrollToSession = function () {
      $anchorScroll();
    }
  }
);