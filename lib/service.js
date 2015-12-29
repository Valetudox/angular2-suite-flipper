'use strict';

import { Injectable, Inject } from 'angular2/core';
import SuiteFlipper from 'suite-flipper-js';

@Injectable()
export class FlipperService {

  suiteFlipper = null;


  setFlippers(value) {
    this.suiteFlipper = new SuiteFlipper(value);
  }


  isOn(flipper): boolean {
    return this.suiteFlipper.isOn(flipper);
  }


  isOff(flipper): boolean {
    return this.suiteFlipper.isOff(flipper);
  }

}
