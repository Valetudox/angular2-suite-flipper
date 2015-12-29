import 'es6-shim';
import 'reflect-metadata';
const { expect } = require('chai');
import { FlipperService } from '../lib/service';

describe('Flipper Service', function() {

  describe('#isOn', function() {

    it('should translate the given simple text', function() {
      let service = new FlipperService();
      service.setFlippers(['testflipper']);

      expect(service.isOn('testflipper')).to.be.true;
    });

  });

});
