/*
 * File: app/controller/PhysicianMenuController.js
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

Ext.define('MediLab.controller.PhysicianMenuController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.physicianmenucontroller',
    config: {
        refs: {
            physicianmenulist: 'physicianmenulist'
        },

        control: {
            "#physicianMenuList": {
                disclose: 'onPhysicianMenuListDisclosure'
            }
        }
    },

    onPhysicianMenuListDisclosure: function(list, record, target, index, e, options) {
        //alert("The Physician Menu list has been disclosed");
        switch(index) {
            case 0:
            Ext.Viewport.setActiveItem({xtype: 'mypatientslist'});
            break;

            case 1:
            Ext.Viewport.setActiveItem({xtype: 'neworderslist'});
            break;

            case 2:
            Ext.Viewport.setActiveItem({xtype: 'pendingorderslist'});
            break;

            case 3:
            Ext.Viewport.setActiveItem({xtype: 'testmenulist'});
            break;

            case 4:
            Ext.Viewport.setActiveItem({xtype: 'loginformpanel'});

        }

    }

});