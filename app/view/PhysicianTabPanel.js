/*
 * File: app/view/PhysicianTabPanel.js
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

Ext.define('MediLab.view.PhysicianTabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.physiciantabpanel',
    requires: [
        'MediLab.view.PhysicianNavView',
        'MediLab.view.Account',
        'MediLab.view.Contact',
        'MediLab.view.Help'
    ],

    config: {
        id: 'homePanel',
        defaults: {
            html: 'This is a placeholder text',
            styleHtmlContent: true
        },
        layout: {
            animation: 'slide',
            type: 'card'
        },
        tabBar: {
            docked: 'bottom',
            layout: {
                align: 'center',
                pack: 'center',
                type: 'hbox'
            }
        },
        items: [
            {
                xtype: 'physiciannavview',
                title: 'Physician',
                iconCls: 'home'
            },
            {
                xtype: 'account',
                title: 'Account',
                iconCls: 'user'
            },
            {
                xtype: 'contact',
                title: 'Contact',
                iconCls: 'locate'
            },
            {
                xtype: 'help',
                title: 'Help',
                iconCls: 'info'
            }
        ]
    }

});