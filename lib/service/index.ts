import { Injectable, Inject } from '@angular/core';
const SuiteFlipper = require('suite-flipper-js');

@Injectable()
export class FlipperService {

  private _suiteFlipper: any;

  constructor(@Inject('flippers') flippers: string[]) {
    this._suiteFlipper = new SuiteFlipper(flippers);
  }


  setFlippers(value: string[]) {
    this._suiteFlipper = new SuiteFlipper(value);
  }


  isOn(flipper: string): boolean {
    return this._suiteFlipper.isOn(flipper);
  }


  isOff(flipper: string): boolean {
    return this._suiteFlipper.isOff(flipper);
  }

}
