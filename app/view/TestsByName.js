/*
 * File: app/view/TestsByName.js
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

Ext.define('MediLab.view.TestsByName', {
    extend: 'Ext.form.Panel',
    alias: 'widget.testsbyname',

    config: {
        height: '100%',
        width: '100%',
        layout: {
            type: 'fit'
        },
        scrollable: false,
        items: [
            {
                xtype: 'list',
                centered: true,
                docked: 'top',
                height: '100%',
                id: '',
                ui: 'round',
                width: '100%',
                emptyText: 'There is no tests',
                itemTpl: [
                    '<div>{name}</div>'
                ],
                scrollToTopOnRefresh: false,
                store: 'testStore',
                grouped: true,
                onItemDisclosure: true,
                name: 'TestsByNameList',
                indexBar: {
                    id: 'testsByNameListIndexBar'
                }
            }
        ]
    }

});