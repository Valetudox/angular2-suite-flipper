import { Injectable, Inject } from 'angular2/core';
const SuiteFlipper = require('suite-flipper-js');

@Injectable()
export class FlipperService {

  private suiteFlipper: SuiteFlipper = SuiteFlipper.create([]);


  setFlippers(value): void {
    this.suiteFlipper = SuiteFlipper.create(value);
  }


  isOn(flipper): boolean {
    return this.suiteFlipper.isOn(flipper);
  }


  isOff(flipper): boolean {
    return this.suiteFlipper.isOff(flipper);
  }

}
