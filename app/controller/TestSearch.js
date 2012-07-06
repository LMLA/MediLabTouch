/*
 * File: app/controller/TestSearch.js
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

Ext.define('MediLab.controller.TestSearch', {
    extend: 'Ext.app.Controller',
    alias: 'controller.testsearch',
    config: {
        refs: {
            testsearch: 'testsearch'
        },

        control: {
            "testsearch [id=testSearchPanelOptions]": {
                itemtap: 'onListItemTap'
            }
        }
    },

    onListItemTap: function(dataview, index, target, record, e, options) {


        var store = Ext.getStore("testStore");
        store.clearFilter(true);

        switch(index) {
            case 0:
            //Ext.Viewport.setActiveItem({xtype: 'testbynamelist'});


            var navigationView = 'physiciannavview',
                xtypeToShow = 'testsbyname',
                title = 'Tests By Name';



            MediLab.app.showViewByPush(dataview, navigationView, xtypeToShow, title);

            break;

            case 1:




            var navigationView = 'physiciannavview',
                xtypeToShow = 'testsbykeyword',
                title = 'Tests By Keyword';

            MediLab.app.showViewByPush(dataview, navigationView, xtypeToShow, title);

            break;

            case 2:


            var navigationView = 'physiciannavview',
                xtypeToShow = 'testsbyspecialty',
                title = 'Tests By Specialty';

            MediLab.app.showViewByPush(dataview, navigationView, xtypeToShow, title);


            break;

            case 3:


            var navigationView = 'physiciannavview',
                xtypeToShow = 'testsbycondition',
                title = 'Tests By Condition';

            MediLab.app.showViewByPush(dataview, navigationView, xtypeToShow, title);


            break;   

            case 4:

            var navigationView = 'physiciannavview',
                xtypeToShow = 'testsbydisease',
                title = 'Tests By Disease';

            MediLab.app.showViewByPush(dataview, navigationView, xtypeToShow, title);



        }


    }

});