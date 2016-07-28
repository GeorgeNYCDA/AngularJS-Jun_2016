(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', function () {
      var self = this;

      self.greeting = "Hello World";

      self.handleEdit = function(item) {
        console.log('Item to edit is: ', item)
      };




      self.person = {
        name: 'Bob',
        items: ['book', 'pen', 'paper']
      };


      self.folders = [{
      	name: 'Folder 1',
      	items: ['File 1.1', 'File 1.2', 'File 1.3']
      }, {
      	name: 'Folder 2',
      	items: ['File 2.1', 'File 2.2', 'File 2.3']
      }, {
      	name: 'Folder 3',
      	items: ['File 3.1', 'File 3.2', 'File 3.3']
      }]

    });

})();
