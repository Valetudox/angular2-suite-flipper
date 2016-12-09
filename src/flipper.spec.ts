import { Flipper } from './flipper';
import { expect } from 'chai';

describe('Flipper', function() {

  describe('initiated by #create', function() {

    it('should throw an error if the provided flippers are not array', function() {
      expect(() => Flipper.create(<any>'["flipper1", "flipper2"]')).to.throw('InvalidFlippersError');
    });


    describe('without given flipper list', function() {

      it('should use empty array as default', function() {
        const flipper = Flipper.create();
        expect(flipper.isOn('bi')).to.be.false;
        expect(flipper.isOff('bi')).to.be.true;
      });

    });

    describe('#isOn', function() {

      it('should respond with true if given flipper is provided', function() {
        const flipper = Flipper.create(['bi', 'dummy', 'dummy2']);
        expect(flipper.isOn('bi')).to.be.true;
      });


      it('should respond with false if given flipper is not provided', function() {
        const flipper = Flipper.create(['bi', 'dummy', 'dummy2']);
        expect(flipper.isOn('predict')).to.be.false;
      });


      it('should run on the service context', function() {
        const flipper = Flipper.create(['bi', 'dummy', 'dummy2']);
        expect(flipper.isOn.call(undefined, 'bi')).to.be.true;
      });

    });

    describe('#isOff', function() {

      it('should respond with false if given flipper is provided', function() {
        const flipper = Flipper.create(['bi', 'dummy', 'dummy2']);
        expect(flipper.isOff('bi')).to.be.false;
      });


      it('should respond with true if given flipper is not provided', function() {
        const flipper = Flipper.create(['bi', 'dummy', 'dummy2']);
        expect(flipper.isOff('predict')).to.be.true;
      });


      it('should run on the service context', function() {
        const flipper = Flipper.create(['bi', 'dummy', 'dummy2']);
        expect(flipper.isOff.call(undefined, 'bi')).to.be.false;
      });

    });


  });

  describe('initiated by #createForApiResponse', function() {    

    it('should throw an error if the provided flippers are not array', function() {
      expect(() => Flipper.createForApiResponse(<any>'["flipper1", "flipper2"]')).to.throw('InvalidFlippersError');
    });

    describe('without given flipper list', function() {

      it('should use empty array as default', function() {
        const flipper = Flipper.createForApiResponse();
        expect(flipper.isOn('bi')).to.be.false;
        expect(flipper.isOff('bi')).to.be.true;
      });

    });

    describe('#isOn', function() {      

      it('should respond with true if given flipper is provided with isOn', function() {
        const flipper = Flipper.createForApiResponse([
          { id: 'bi', isOn: true },
          { id: 'dummy', isOn: true },
          { id: 'dummy2', isOn: false }
        ]);
        expect(flipper.isOn('bi')).to.be.true;
      });


      it('should respond with false if given flipper is not provided', function() {
        const flipper = Flipper.createForApiResponse([
          { id: 'bi', isOn: true },
          { id: 'dummy', isOn: true },
          { id: 'dummy2', isOn: false }
        ]);
        expect(flipper.isOn('predict')).to.be.false;
      });


      it('should respond with false if given flipper is provided with isOn false', function() {
        const flipper = Flipper.createForApiResponse([
          { id: 'bi', isOn: true },
          { id: 'dummy', isOn: true },
          { id: 'dummy2', isOn: false }
        ]);
        expect(flipper.isOn('dummy2')).to.be.false;
      });

    });

    describe('#isOff', function() {

      it('should respond with true if given flipper is provided with isOff', function() {
        const flipper = Flipper.createForApiResponse([
          { id: 'bi', isOn: true },
          { id: 'dummy', isOn: true },
          { id: 'dummy2', isOn: false }
        ]);
        expect(flipper.isOff('dummy2')).to.be.true;
      });


      it('should respond with true if given flipper is not provided', function() {
        const flipper = Flipper.createForApiResponse([
          { id: 'bi', isOn: true },
          { id: 'dummy', isOn: true },
          { id: 'dummy2', isOn: false }
        ]);
        expect(flipper.isOff('predict')).to.be.true;
      });


      it('should respond with false if given flipper is provided with isOn true', function() {
        const flipper = Flipper.createForApiResponse([
          { id: 'bi', isOn: true },
          { id: 'dummy', isOn: true },
          { id: 'dummy2', isOn: false }
        ]);
        expect(flipper.isOff('bi')).to.be.false;
      });

    });

  });


});