import { FlipperIsOffPipe } from './is-off';
import { FlipperService } from '../service';
import { expect } from 'chai';

const createPipeForFlippers = ({
  flippers = <string[]>[]
} = {}) => {
  const service = new FlipperService(flippers);
  return new FlipperIsOffPipe(service);
};

describe('Suite Flipper / Is Off Pipe', function() {

  describe('#transform', function () {

    it('should be false if the given flipper is on', function () {
      const pipe = createPipeForFlippers({ flippers: ['testflipper'] });
      expect(pipe.transform('testflipper')).to.eql(false);
    });


    it('should be true if the given flipper is off', function () {
      const pipe = createPipeForFlippers({ flippers: ['testflipper'] });
      expect(pipe.transform('other')).to.eql(true);
    });

  });

});
