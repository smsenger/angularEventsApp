'use strict';

eventsApp.filter('durations', function () {
    return function (duration) {
        switch (duration) {
            case 1:
                return 'Half Hour';
            case 2:
                return "1 Hour";
            case 3:
                return "half Day";
            case 4:
                return "Full Day"
        }
    }
})
