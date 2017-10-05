import Ember from 'ember';
const {dialog} = window.requireNode('electron').remote;

export default Ember.Component.extend({

    actions: {
        openFolderPicker: function(model) {
            dialog.showOpenDialog({
                title:"Select a folder",
                properties: ["openDirectory"]
            }, (folderPaths) => {
                // folderPaths is an array that contains all the selected paths
                if(folderPaths === undefined){
                    console.log("No destination folder selected");
                    return;
                }else{
                    this.sendAction('setChosenFolder', model, folderPaths[0])
                    // this.folder.folderChosen = folderPaths[0];
                    this.set('folder.folderChosen', folderPaths[0])
                    console.log(folderPaths);
                }
            });
        }
    }
});
