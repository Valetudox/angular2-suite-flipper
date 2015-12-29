import { Pipe } from 'angular2/core';
import { FlipperService } from './service';

@Pipe({ name: 'flipperIsOn' })
export class FlipperIsOnPipe {

  constructor(flipperService: FlipperService) {
    this._flipperService = flipperService;
  }


  transform(name) {
    return this._flipperService.isOn(name);
  }

}
