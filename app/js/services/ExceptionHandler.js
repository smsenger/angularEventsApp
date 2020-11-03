'use strict';


//using $ in name will overwrite angular service with this one. 
eventsApp.factory('$exceptionHandler', function () {
    return function (exception) {
        console.log("exception handled: " + exception.message);
    }
})