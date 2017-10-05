import Ember from 'ember';
const fs = window.requireNode('fs');

export default Ember.Component.extend({

    filesObj: undefined,

    init() {
        // console.log('file chooser initialised!');
        this._super(...arguments);
        this.getFilesFromDir(this.get('folder.folderChosen'));
    },

    getFilesFromDir(dir) {
        const files = fs.readdirSync(dir);
        this.filesObj = files.map(elem => {
            return {name: elem, selected: false};
        });
        this.set('folder.filesInFolder', files);
        this.set('folder.filesChosen', this.filesObj);
        // console.log('obj:', this.filesObj);
    },

    actions: {
        changeAction: function(index) {
            var temp = this.get('folder.filesChosen').objectAt(index);
            Ember.set(temp, 'selected', !temp.selected);
            this.set('folder.filesArray', 
                this.get('folder.filesChosen')
                    .filter(elem => elem.selected)
                    .map(elem => elem.name));
            console.log('folder.filesChosen:', this.get('folder.filesChosen'));
            console.log('folder.filesArray:', this.get('folder.filesArray'));
            // this.filesObj[index].selected = !this.filesObj[index].selected;
            // this.set('folder.filesChosen', this.filesObj);
            
        }  
    }
});
