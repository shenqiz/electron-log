'use strict';

var expect = require('chai').expect;
var helper = require('../spec-helper');

describe('ipc test project', function () {
  this.timeout(15000);

  it('should write 15 lines to a log file', function () {
    return helper.run('ipc', this.timeout()).then(function (logs) {
      expect(logs.length).to.equal(15);
      expect(logs[0]).to.match(/{ name: 'Log object in renderer' }/);
      expect(logs[1]).to.match(/function functionInRenderer\(\)/);
      expect(logs[4]).to.match(/Error: Error in renderer/);
      expect(logs[6]).to.match(/{ name: 'Log object in main' }/);
      expect(logs[7]).to.match(/function functionInMain\(\)/);
      expect(logs[10]).to.match(/Error: Error in main/);
    });
  });
});
