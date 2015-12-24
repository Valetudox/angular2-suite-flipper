import { Pipe, PipeTransform } from 'angular2/core';
import { FlipperService } from './service';

@Pipe({ name: 'flipperIsOn' })
export class FlipperIsOnPipe implements PipeTransform {

  constructor(private flipperService: FlipperService) {}

  transform(value): boolean {
    return this.flipperService.isOn(value);
  }

}
