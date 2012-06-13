/*
 * File: app/model/LabTestsOnline.js
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

Ext.define('MyApp.model.LabTestsOnline', {
    extend: 'Ext.data.Model',
    alias: 'model.labTestsOnline',
    config: {
        fields: [
            {
                name: 'id'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'synonyms',
                type: 'string'
            },
            {
                name: 'relatedTests',
                type: 'string'
            },
            {
                name: 'patientGeneralInfo',
                type: 'string'
            },
            {
                name: 'patientTestSample',
                type: 'string'
            },
            {
                name: 'theTest',
                type: 'string'
            },
            {
                name: 'commonQuestions',
                type: 'string'
            }
        ]
    }
});