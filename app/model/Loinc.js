/*
 * File: app/model/Loinc.js
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

Ext.define('MyApp.model.Loinc', {
    extend: 'Ext.data.Model',
    alias: 'model.loinc',
    config: {
        fields: [
            {
                name: 'id',
                type: 'int'
            },
            {
                name: 'code',
                type: 'string'
            },
            {
                name: 'shortName',
                type: 'string'
            },
            {
                name: 'longName',
                type: 'string'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'component',
                type: 'string'
            },
            {
                name: 'property',
                type: 'string'
            },
            {
                name: 'time',
                type: 'string'
            },
            {
                name: 'system',
                type: 'string'
            },
            {
                name: 'scale',
                type: 'string'
            },
            {
                name: 'method',
                type: 'string'
            }
        ]
    }
});