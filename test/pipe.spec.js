import 'es6-shim';
import 'reflect-metadata';
const { expect } = require('chai');
import { FlipperService, FlipperIsOffPipe, FlipperIsOnPipe } from '../lib';

describe('Pipes', function() {

  let service;
  let pipe;

  beforeEach(function () {
    service = new FlipperService(['testflipper']);
  });

  describe('Is On Pipe', function() {

    beforeEach(function () {
      pipe = new FlipperIsOnPipe(service);
    });

    describe('#transform', function () {

      it('should be true if the given flipper is on', function () {
        expect(pipe.transform('testflipper')).to.be.true;
      });


      it('should be false if the given flipper is off', function () {
        expect(pipe.transform('other')).to.be.false;
      });

    });

  });

  describe('Is Off Pipe', function() {

    beforeEach(function () {
      pipe = new FlipperIsOffPipe(service);
    });

    describe('#transform', function () {

      it('should be false if the given flipper is on', function () {
        expect(pipe.transform('testflipper')).to.be.false;
      });


      it('should be true if the given flipper is off', function () {
        expect(pipe.transform('other')).to.be.true;
      });

    });

  })

});
