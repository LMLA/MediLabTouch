/*
 * File: app.js
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

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'PhysicianMenuModel',
        'LoginMenuModel',
        'TestModel',
        'TestMenuModel',
        'TestTempModel',
        'SpecialtyModel',
        'ConditionModel',
        'DiseaseModel'
    ],
    stores: [
        'LoginMenuArrayStore',
        'PhysicianMenuArrayStore',
        'TestMenuArrayStore',
        'TestTemp',
        'TestStore'
    ],
    views: [
        'HomePanel',
        'Account',
        'Contact',
        'Help',
        'LoginFormPanel',
        'PhysicianMenuContainer',
        'TestPortfolioView',
        'TestMenuList',
        'TestDetail',
        'TestPortfolioList',
        'ByKeyWordList'
    ],
    name: 'MediLab',
    controllers: [
        'LoginFormController',
        'PhysicianMenuController',
        'TestMenuController',
        'TestPortfolioController',
        'ByKeyWordFormController'
    ],

    launch: function() {

        Ext.Viewport.add({
            xclass: 'MediLab.view.LoginFormPanel'
        });



    }

});
