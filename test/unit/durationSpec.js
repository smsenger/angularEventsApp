'use strict';

//tests filter for durations of courses
describe('duration', function() {
    beforeEach(module('eventsApp'));

    it('should return "Half Hour" when given a 1', inject(function(durationsFilter) {
        expect(durationsFilter(1)).toEqual('Half Hour');
    }) )
});