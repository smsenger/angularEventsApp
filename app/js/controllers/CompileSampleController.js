'use strict';

eventsApp.controller('CompileSampleController',

    //angular uses $compile to internally process a page and handle directives on the page
    function CacheSampleController($scope, $compile, $parse) {

        var fn = $parse('1 + 2');
        console.log(fn());

        var getter = $prase('event.name');

        var context1 = { event: { name: 'AngularJS Boot Camp' } };
        var context2 = { event: { name: 'Code Camp' } };

        console.log(getter(context1));
        console.log(getter(context2));

        //getter will take a context and a local context. local context will override other context. below will print context1 to console
        console.log(getter(context2, context1));


        //will set name value to 'Code Retreat' 
        var setter = getter.assign;
        setter(context2, 'Code Retreat');

        console.log(context2.event.name);

        $scope.appendDivToElement = function (markup) {
            return $compile(markup)($scope).appendTo(angular.element("#appendHere"));
        }
    })