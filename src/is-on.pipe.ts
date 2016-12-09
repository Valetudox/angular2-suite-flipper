import { Pipe } from '@angular/core';
import { FlipperService } from './flipper.service';

@Pipe({ name: 'flipperIsOn' })
export class FlipperIsOnPipe {

  private _flipperService: FlipperService;

  constructor(flipperService: FlipperService) {
    this._flipperService = flipperService;
  }


  transform(name: string): boolean {
    return this._flipperService.isOn(name);
  }

}
