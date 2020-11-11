'use strict';

eventsApp
    .directive('greeting', function () {
        return {
            restrict: 'E',
            replace: true,
            priority: -1,
            template: "<button class='btn' ng-click='sayHello()'>Say Hello</button>",
            controller: 'GreetingController'

            // controller: function ($scope) {
            //     $scope.sayHello = function () {
            //         alert('Hello');p
            //     }
            // }
        }//
    })
    .directive('finnish', function () {
        return {
            restrict: 'A',
            priority: -1,

            //terminal will not allow directives with lower priority to execute. make priorities negative to allow directives with same # to execute.
            terminal: true,
            require: 'greeting',
            link: function (scope, element, attrs, controller) {
                controller.addGreeting('hei');
            }
        }
    })
    .directive('hindi', function () {
        return {
            restrict: 'A',
            priority: -2,
            require: 'greeting',
            link: function (scope, element, attrs, controller) {
                controller.addGreeting('नमस्कार')
            }
        }
    })

//this could be defined here or in separate controller file
//could also keep this in the first directive and use it with the other directives
eventsApp.controller('GreetingController',
    function GreetingController($scope) {
        var greetings = ['hello']
        $scope.sayHello = function () {
            alert(greetings.join());
        }
        this.addGreeting = function (greeting) {
            greetings.push(greeting)
        }
    })