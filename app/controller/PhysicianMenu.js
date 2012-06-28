/*
 * File: app/controller/PhysicianMenu.js
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

Ext.define('MediLab.controller.PhysicianMenu', {
    extend: 'Ext.app.Controller',
    alias: 'controller.physicianmenu',
    config: {
        refs: {
            physicianmenu: '#physicianmenu',
            physiciannavview: '#physiciannavview'
        },

        control: {
            "physicianmenu [name=PhysicianMenuList]": {
                itemtap: 'onListItemTap'
            },
            "button": {
                tap: 'onButtonTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        //alert("The Physician Menu list has been disclosed");




        switch(index) {
            case 0:


            console.log ("Patientslist view pushed by itemtap event handler " + index);

            dataview.up('physiciannavview').push({
                xtype : 'patientlist',
                title : 'Patient List'
            });


            break;

            case 1:

            console.log ("NewOrder view pushed by itemtap event handler " + index);

            dataview.up('physiciannavview').push({
                xtype : 'neworder',
                title : 'New Order'
            });


            break;

            case 2:

            console.log ("PendingOrders view pushed by itemtap event handler " + index);

            dataview.up('physiciannavview').push({
                xtype : 'pendingorders',
                title : 'Physician Pending orders'
            });

            break;

            case 3:

            console.log ("testMenuArrayStore view pushed by itemtap event handler " + index);

            Ext.getStore('testMenuArrayStore').load();

            dataview.up('physiciannavview').push({
                xtype : 'testsearch',
                title : 'Test Search Menu'
            });


            break;

            case 4:

            console.log ("LoginFormPanel view pushed by itemtap event handler " + index);
            /*
            Ext.getStore('loginMenuArrayStore').load();

            dataview.up('physiciannavview').push({
            xtype : 'loginformpanel',
            title : 'Physician Menu'
            });
            */   
            Ext.Viewport.setActiveItem({xtype: 'loginformpanel'});
        }

    },

    onButtonTap: function(button, e, options) {
        /*
        button.up('physiciannavview').push({
        xtype:'testsearchpanel',
        title: 'Test Search'
        });
        */
    }

});