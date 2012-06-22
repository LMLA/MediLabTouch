/*
 * File: app/view/ByKeywordList.js
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

Ext.define('MediLab.view.ByKeywordList', {
    extend: 'Ext.form.Panel',
    alias: 'widget.bykeywordlist',

    config: {
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Test Portfolio',
                items: [
                    {
                        xtype: 'button',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'searchfield',
                margin: '5 10 10 10 ',
                label: '',
                name: 'search',
                autoComplete: true,
                autoCorrect: true,
                placeHolder: 'test name ...'
            },
            {
                xtype: 'list',
                height: 392,
                id: 'TestsByKeyWordList',
                ui: 'round',
                width: '100%',
                scrollable: false,
                itemTpl: [
                    '<div>{name}</div>'
                ],
                store: 'testStore',
                onItemDisclosure: true
            }
        ]
    }

});