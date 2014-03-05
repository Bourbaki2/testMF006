'use strict';

describe('Controller: Route001Ctrl', function () {

  // load the controller's module
  beforeEach(module('yoAngular006App'));

  var Route001Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Route001Ctrl = $controller('Route001Ctrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
