'use strict';

//no way to set expiration for cookies in angular, must use 3rd party library

eventsApp.controller('CookieStoreSampleController',
    function CookieStoreSampleController($scope, $cookieStore) {
        $scope.event = { id: 1, name: "My Event" };

        $scope.saveEventToCookie = function (event) {
            $cookieStore.put('event', event);
        };

        $scope.getEventFromCookie = function () {
            console.log($cookieStore.get('event'));
        };

        $scope.removeEventCookie = function () {
            $cookieStore.remove('event');
        };
    })