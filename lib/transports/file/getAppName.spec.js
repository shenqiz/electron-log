'use strict';

var expect = require('chai').expect;
var getAppName  = require('./getAppName');

describe('file transport getAppName', function () {
  it('should return package name by reading package.json', function () {
    expect(getAppName()).to.equals(
      'mocha',
      'It has to load a mocha package, because it\'s an entry point'
    );
  });
});
