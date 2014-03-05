'use strict';

angular.module('yoAngular006App')
  .provider('provider001', function () {

    // Private variables
    var salutation = 'Bonjour la planète!!';

    // Private constructor
    function Greeter() {
      this.greet = function () {
        return salutation;
      };
    }

    // Public API for configuration
    this.setSalutation = function (s) {
      salutation = s;
    };

    // Method for instantiating
    this.$get = function () {
      return new Greeter();
    };
  });
