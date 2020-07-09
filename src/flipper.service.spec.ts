import { FlipperService } from './flipper.service';
import { expect } from 'chai';

describe('Flipper Service', function() {

  const createService = ({
    flippers = <string[]>[]
  } = {}) => {
    return new FlipperService(flippers);
  };

  describe('#isOn', function() {

    it('should be true if the given flipper is on', function() {
      const service = createService({ flippers: ['testflipper'] });
      expect(service.isOn('testflipper')).to.eql(true);
    });


    it('should be false if the given flipper is off', function() {
      const service = createService({ flippers: ['testflipper'] });
      expect(service.isOn('otherflipper')).to.eql(false);
    });

  });

  describe('#isOff', function() {

    it('should be false if the given flipper is on', function() {
      const service = createService({ flippers: ['testflipper'] });
      expect(service.isOff('testflipper')).to.eql(false);
    });


    it('should be true if the given flipper is off', function() {
      const service = createService({ flippers: ['testflipper'] });
      expect(service.isOff('otherflipper')).to.eql(true);
    });

  });

  describe('#setFlippers', function() {

    it('should override the original flippers', function() {
      const service = createService({ flippers: ['testflipper'] });
      service.setFlippers(['newflipper']);

      expect(service.isOn('testflipper')).to.eql(false);
      expect(service.isOn('newflipper')).to.eql(true);
    });

  });

  describe('#getFlippers', function() {

    it('should return flippers', function() {
      const flippers = ['testflipper'];
      const service = createService({ flippers });

      expect(service.getFlippers()).to.eql(flippers);
    });

  });
});
