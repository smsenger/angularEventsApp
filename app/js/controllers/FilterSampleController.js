'use strict';

eventsApp.controller('FilterSampleController',

    //can also replace $filter with custom name, like durationsFilter, then instead of defining durations with $filter('durations'), delete that line and use durationsFilter(1), etc.
    function FilterSampleController($scope, $filter) {
        $scope.data = {};

        var durations = $filter('durations');
        $scope.data.duration1 = durations(1);
        $scope.data.duration2 = durations(2);
        $scope.data.duration3 = durations(3);
        $scope.data.duration4 = durations(4);
    })