'use strict';

var eventsApp = angular.module('eventsApp', ['ngResource', 'ngRoute'])
    //config called when app 1st bootstrapped by angular/when it's being configured
    .config(function ($routeProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: 'templates/NewEvent.html',
                controller: 'EditEventController'
            });
    });

    //can keep chaining methods on the config module
    // .factory('myCache', function ($cacheFactory) {

    //     //capacity is 3 entries. if >3 entered, the first one will be eliminated first, and so forth, to make room for new entries
    //     return $cacheFactory('myCache', { capacity: 3 })
    // });

