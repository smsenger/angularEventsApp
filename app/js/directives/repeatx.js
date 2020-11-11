

eventsApp.directive('repeatX', function (/*$compile*/) {
    return {

        //scope is not available with compile, not for binding to scope
        //runs once and effects all instances
        compile: function (element, attributes) {
            for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
                element.after(element.clone().attr('repeat-x', 0));
            }
            return function (scope, element, attributes, controller) {
                attributes.$observe('text', function (newValue) {
                    if (newValue === 'Hello World') {
                        element.css('color', 'red');
                    }
                });
            }
        }


        //link function runs once for each directive
        //w/o attr.() this results in an infinite loop: each cloned element will also clone elements, 
        //and the elements will clone elements... and so on. w/ attr() the cloned elements will repeat 0 times
        // link: function (scope, element, attributes, controller) {
        //     for (var i = 0; i < Number(attributes.repeatX) - 1; i++) {
        //         element.after($compile(element.clone().attr('repeat-x', 0))(scope));
        //     }
        // }
    };
});