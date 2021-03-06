/*
 * File: app/controller/TestsByKeyWord.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MediLab.controller.TestsByKeyWord', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            bykeywordlist: {
                selector: '#bykeywordlist',
                xtype: 'bykeywordlist'
            }
        },

        control: {
            "searchfield": {
                keyup: 'onSearchfieldKeyup',
                clearicontap: 'onSearchfieldClearicontap'
            },
            "button": {
                tap: 'onBackButtonTap'
            },
            "testsbykeyword [name=TestsByKeyWordList]": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onSearchfieldKeyup: function(textfield, e, options) {


        //get the store and the value of the field

        var value = textfield.getValue();
        var store = Ext.getStore("testStore");

        console.log("store: ", store);

        store.clearFilter(true);

        // Check if we have a value, else we don't have to do anything

        if (value) {
            store.filter("name", value);
            // store.filter(
            // function(record) {
            // return record.get('name').match(value);
            //}
            //);
        }
    },

    onSearchfieldClearicontap: function(text, e, options) {

        var store = Ext.getStore("testStore");
        store.clearFilter(false);

    },

    onBackButtonTap: function(button, e, options) {
        /*
        Ext.Viewport.add({
        xclass: 'MediLab.view.TestPortfolioView'
        });
        */

    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        console.log("The Test Detail item tap:", record.data.name );

        dataview.up('physiciannavview').push({
            xtype : 'testdetail',
            title : 'Test Detail',
            data: record.getData()
        });

    }

});