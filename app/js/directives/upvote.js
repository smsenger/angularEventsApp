'use strict';

eventsApp.directive('upvote', function () {
    return {
        //available values: 'E' for element, 'A' for attribute, 'C' for class, 'M' for comment.
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/upvote.html',
        scope: {
            //can just use symbol if name of scope here matches attr used in html. 
            //= is for an object (eg: a string). & is for method executed in parent scope, not isolate scope. @ for a string to be passed in.
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
});
