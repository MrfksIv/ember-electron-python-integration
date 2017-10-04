import Ember from 'ember';

export default Ember.Route.extend({
    model: function () {
        return {val: '1+1'};
    }
});
