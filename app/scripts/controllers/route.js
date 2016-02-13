'use strict';

angular.module('personalWebsiteApp')
.controller('RouteCtrl', function($scope) {
  /** create $scope.template **/

  $scope.template = {
    'home': 'views/home.html',
    'blog': 'views/blog.html',
    'about': 'views/about.html',
    'contact': 'views/contact.html'
  };
  });
  
//   $scope.message={
//     
//      "home":"Message from home template",
//      "about":"Message from about template",
//      "contact":"Message from contact template"
//      
//    }
 
  /** now after this ng-include in uirouter.html set and take template from their respective path **/