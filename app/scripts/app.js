'use strict';

/**
 * @ngdoc overview
 * @name personalWebsiteApp
 * @description
 * # personalWebsiteApp
 *
 * Main module of the application.
 */
var app = angular.module('personalWebsiteApp', ['ngRoute'])
  
app.config(function($routeProvider){
     $routeProvider
     .when('/', {
         controller: 'RouteCtrl',
         templateUrl: 'views/uirouter.html'
     })
     .otherwise({
        redirectTo: '/'
     });
 });

app.directive('contact-form', function(){
   return {
        restrict: 'AE',
        replace: true,
        template: '<h1>aaaa</h1>'
   };
});
