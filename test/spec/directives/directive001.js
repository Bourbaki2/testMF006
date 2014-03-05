'use strict';

describe('Directive: directive001', function () {

  // load the directive's module
  beforeEach(module('yoAngular006App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<directive001></directive001>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the directive001 directive');
  }));
});
