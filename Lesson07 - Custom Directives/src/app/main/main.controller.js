(function() {
  'use strict';

  angular
    .module('template')
    .controller('MainController', function () {
      var self = this;

      self.greeting = "Hello World";


      self.folders = [{
      	name: 'Folder 1',
      	files: ['File 1.1', 'File 1.2', 'File 1.3']
      }, {
      	name: 'Folder 2',
      	files: ['File 2.1', 'File 2.2', 'File 2.3']
      }, {
      	name: 'Folder 3',
      	files: ['File 3.1', 'File 3.2', 'File 3.3']
      }]

    });

})();
