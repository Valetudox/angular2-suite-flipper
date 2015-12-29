'use strict';

import { Pipe, PipeTransform } from 'angular2/core';
import FlipperService from './service';

@Pipe({ name: 'flipperIsOff' })
export class FlipperIsOffPipe implements PipeTransform {

  constructor(flipperService: FlipperService) {
    this._flipperService = flipperService;
  }


  transform(name) {
    return this._flipperService.isOff(name);
  }

}
