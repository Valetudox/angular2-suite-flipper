import { Injectable, Inject } from '@angular/core';
import { InvalidFlippersError } from './errors';

export type FlipperFromApi = {
  isOn: boolean;
  id: string;
};

@Injectable()
export class Flipper {

  private _availableFlippers: string[];

  constructor(@Inject('flippers') avalaibleFlippers: string[] = []) {
    this._availableFlippers = avalaibleFlippers;
    this.isOn = this.isOn.bind(this);
    this.isOff = this.isOff.bind(this);
  }


  isOn(flipperName: string): boolean {
    return this._availableFlippers.indexOf(flipperName) > -1;
  }


  isOff(flipperName: string): boolean {
    return !this.isOn(flipperName);
  }


  static create(availableFlippers: string[] = []): Flipper {
    if (!Array.isArray(availableFlippers)) throw new InvalidFlippersError();

    return new Flipper(availableFlippers);
  }


  static createForApiResponse(apiResponse: FlipperFromApi[] = []): Flipper {
    if (!Array.isArray(apiResponse)) throw new InvalidFlippersError();
    const flippers = apiResponse
      .filter(flipper => flipper.isOn)
      .map(flipper => flipper.id);
    return new Flipper(flippers);
  }

}
