/*
 * File: app/controller/LoginFormController.js
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

Ext.define('MediLab.controller.LoginFormController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.loginformcontroller',
    config: {
        refs: {
            loginformpanel: 'loginformpanel'
        },

        control: {
            "loginformpanel [name=LoginMenuList]": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {
        //alert("The Login Menu list has been disclosed");

        //Ext.Viewport.remove(Ext.Viewport.getActiveItem(), true);
        //your_container(your_container.getActiveItem(), false);

        switch(index) {
            case 0:

            Ext.Viewport.setActiveItem({xtype: 'myPatients'});
            break;

            case 1:
            Ext.Viewport.setActiveItem({xtype: 'newOrder'});
            break;

            case 2:
            Ext.Viewport.setActiveItem({xtype: 'physiciantabpanel'});

        }

    }

});