import { Injectable, Inject } from '@angular/core';
import { Flipper } from './flipper';

@Injectable()
export class FlipperService {

  private _flipper: Flipper;
  private _flippers: string[];

  constructor(@Inject('flippers') flippers: string[]) {
    this._flipper = new Flipper(flippers);
    this._flippers = flippers;
  }


  setFlippers(value: string[]) {
    this._flipper = new Flipper(value);
  }

  
  getFlippers(): string[] {
    return this._flippers;
  }


  isOn(flipper: string): boolean {
    return this._flipper.isOn(flipper);
  }


  isOff(flipper: string): boolean {
    return this._flipper.isOff(flipper);
  }

}
