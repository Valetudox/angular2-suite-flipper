import { Injectable, Inject } from 'angular2/core';
let SuiteFlipper = require('suite-flipper-js');

@Injectable()
export class FlipperService {

  private suiteFlipper;


  setFlippers(value): void {
    this.suiteFlipper = new SuiteFlipper(value);
  }


  isOn(flipper): boolean {
    return this.suiteFlipper.isOn(flipper);
  }


  isOff(flipper): boolean {
    return this.suiteFlipper.isOff(flipper);
  }

}
