'use strict';

eventsApp.controller('TimeoutSampleController',
    function TimeoutSampleController($scope, $timeout) {


        //will set name after 3 second, like js setTimeout() method
        // var promise = $timeout(function () {
        //     $scope.name = "John Doe";
        // }, 3000);


        //name won't show on page because angular doesn't know that this is happening. will reevaluate binding when text entered in input box and print "John Doe"
        //with $timeout, angular is aware of model changes made by $timeout
        setTimeout(function () {
            $scope.name = "John Doe";
        }, 3000);

        $scope.cancel = function () {
            $timeout.cancel(promise);
        };
    })