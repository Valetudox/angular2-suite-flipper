import { FlipperIsOnPipe } from './is-on';
import { FlipperService } from '../service';
import { expect } from 'chai';

const createPipeForFlippers = ({
  flippers = <string[]>[]
} = {}) => {
  const service = new FlipperService(flippers);
  return new FlipperIsOnPipe(service);
};

describe('Suite Flipper / Is On Pipe', function() {

  describe('#transform', function () {

    it('should be true if the given flipper is on', function () {
      const pipe = createPipeForFlippers({ flippers: ['testflipper'] });
      expect(pipe.transform('testflipper')).to.eql(true);
    });


    it('should be false if the given flipper is off', function () {
      const pipe = createPipeForFlippers({ flippers: ['testflipper'] });
      expect(pipe.transform('other')).to.eql(false);
    });

  });

});
