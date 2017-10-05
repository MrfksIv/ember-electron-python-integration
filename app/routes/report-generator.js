import Ember from 'ember';

export default Ember.Route.extend({
    model: () => {
        return {
            folderChosen: undefined,
            filesInFolder: undefined,
            filesChosen: undefined,
            filesArray: undefined
        }
    },

    actions: {
        setChosenFolder: function(model, folderChosen) {
            console.log('received chosed folder at router:', folderChosen);
            this.model.folderChosen = folderChosen;
        }
    }
});
