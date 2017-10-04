import Ember from 'ember';
// const zerorpc = window.requireNode("zerorpc");
// let client = new zerorpc.Client();

export default Ember.Component.extend({
    result: 0, 

    actions: {
        calculate: function(formula) {
            console.log('clicked!!', formula);
            client.invoke("calc", formula.val, (error, res) => {
                if(error) {
                    console.error(error);
                } else {
                    console.log('RESULT:', res);
                }
            });
        }
    }
});
