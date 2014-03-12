'use strict';

// 3e écriture Branche : develop

describe('Service: provider001', function () {

  // load the service's module
  beforeEach(module('yoAngular006App'));

  // instantiate service
  var provider001;
  beforeEach(inject(function (_provider001_) {
    provider001 = _provider001_;
  }));

  it('should do something', function () {
    expect(!!provider001).toBe(true);
  });

});
