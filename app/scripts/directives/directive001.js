'use strict';

angular.module('yoAngular006App')
  .directive('directive001', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the directive001 directive');
      }
    };
  });
