import 'es6-shim';
import 'reflect-metadata';
const { expect } = require('chai');
import { FlipperService } from '../lib/service';

describe('Flipper Service', function() {

  let service;

  beforeEach(function() {
    service = new FlipperService(['testflipper']);
  });

  describe('#isOn', function() {

    it('should be true if the given flipper is on', function() {
      expect(service.isOn('testflipper')).to.be.true;
    });


    it('should be false if the given flipper is off', function() {
      expect(service.isOn('otherflipper')).to.be.false;
    });

  });

  describe('#isOff', function() {

    it('should be false if the given flipper is on', function() {
      expect(service.isOff('testflipper')).to.be.false;
    });


    it('should be true if the given flipper is off', function() {
      expect(service.isOff('otherflipper')).to.be.true;
    });

  });

  describe('#setFlippers', function() {

    it('should override the original flippers', function() {
      service.setFlippers(['newflipper']);

      expect(service.isOn('testflipper')).to.be.false;
      expect(service.isOn('newflipper')).to.be.true;
    });

  });

});
