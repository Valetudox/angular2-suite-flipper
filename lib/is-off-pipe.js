import { Pipe } from 'angular2/core';
import { FlipperService } from './service';

@Pipe({ name: 'flipperIsOff' })
export class FlipperIsOffPipe {

  constructor(flipperService: FlipperService) {
    this._flipperService = flipperService;
  }


  transform(name) {
    return this._flipperService.isOff(name);
  }

}
