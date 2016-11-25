/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');

module.exports = function(defaults) {
  return new Angular2App(defaults, {
    vendorNpmFiles: [
      'systemjs/dist/system-polyfills.js',
      'systemjs/dist/system.src.js',
      'zone.js/dist/*.js',
      'es6-shim/es6-shim.js',
      'reflect-metadata/*.js',
      'rxjs/**/*.js',
      '@angular/**/*.js'

      // Add following lines (1/2)
      'angular2-fontawesome/*.+(js|js.map)',
      'angular2-fontawesome/**/*.+(js|js.map)',
      'angular2-fontawesome/**/**/*.+(js|js.map)',

      // You need to add following lines as well (2/2)
      'font-awesome/css/*.*',
      'font-awesome/fonts/*.*'
    ]
  });
};
