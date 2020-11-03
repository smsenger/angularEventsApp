'use strict';
console.log('here')

eventsApp.directive('mySample', function ($compile) {
    return {
        restrict: 'C',
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}}<br/>",

        //below called an "isolate scope." isolates the scope of different instances of an element.
        scope: {

        }
    };
});