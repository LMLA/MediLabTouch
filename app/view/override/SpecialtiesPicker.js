Ext.define('MediLab.view.override.SpecialtiesPicker', {
    requires: 'MediLab.view.SpecialtiesPicker'
}, function() {
    Ext.override(MediLab.view.SpecialtiesPicker, {
    config: {
        useTitles: true,
        slots: [
            {
                xtype: 'pickerslot',
                ui: 'light',
                store: 'specialtyStore',
                displayField: 'name',
                name: 'specialty',
                title: 'Specialty'
            }
        ]
    }    
    });
});