import { Injectable, Inject } from 'angular2/core';
import SuiteFlipper from 'suite-flipper-js';

@Injectable()
export class FlipperService {

  constructor(@Inject('flippers') flippers) {
    this._suiteFlipper = new SuiteFlipper(flippers);
  }


  setFlippers(value) {
    this._suiteFlipper = new SuiteFlipper(value);
  }


  isOn(flipper) {
    return this._suiteFlipper.isOn(flipper);
  }


  isOff(flipper) {
    return this._suiteFlipper.isOff(flipper);
  }

}
