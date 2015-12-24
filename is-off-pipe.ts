import { Pipe, PipeTransform } from 'angular2/core';
import { FlipperService } from './service';

@Pipe({ name: 'flipperIsOff' })
export class FlipperIsOffPipe implements PipeTransform {

  constructor(private flipperService: FlipperService) {}

  transform(value): boolean {
    return this.flipperService.isOff(value);
  }

}
