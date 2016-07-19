(function() {
  'use strict';

  angular.module('template')
  .config(function ($stateProvider, $urlRouterProvider, MyCustomUserProvider, UI_STATES) {


    MyCustomUserProvider.setUserName('tom@nycda.com')


    $stateProvider
    .state(UI_STATES.HOME, {
      url: '/',
      templateUrl: 'app/home/partials/home.html',
      controller: 'HomeController as ctrl'
    })
    .state(UI_STATES.CONTACTS, {
      url: '/contacts',
      templateUrl: 'app/contacts/partials/contacts.html',
      controller: 'ContactsController as ctrl'
    })
    .state('contacts.ceo', {
      url: '/ceo',
      templateUrl: 'app/contacts/partials/ceo.html',
    })
    .state('contacts.president', {
      url: '/president',
      templateUrl: 'app/contacts/partials/president.html',
    })
    .state('contacts.founder', {
      url: '/founder',
      templateUrl: 'app/contacts/partials/founder.html',
    })




    .state(UI_STATES.STORE, {
      url: '/store',
      templateUrl: 'app/store/partials/store.html',
      controller: 'StoreController as ctrl'
    });


    $urlRouterProvider.otherwise('/')

  })


})();
