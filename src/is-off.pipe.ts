import { Pipe } from '@angular/core';
import { FlipperService } from './flipper.service';

@Pipe({ name: 'flipperIsOff' })
export class FlipperIsOffPipe {

  private _flipperService: FlipperService;

  constructor(flipperService: FlipperService) {
    this._flipperService = flipperService;
  }


  transform(name: string): boolean {
    return this._flipperService.isOff(name);
  }

}
