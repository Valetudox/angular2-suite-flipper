import { NgModule, ModuleWithProviders } from '@angular/core';
import { FlipperIsOffPipe, FlipperIsOnPipe, FlipperService } from './src';
export * from './src';

@NgModule({
  declarations: [
    FlipperIsOffPipe,
    FlipperIsOnPipe
  ],
  exports: [
    FlipperIsOffPipe,
    FlipperIsOnPipe
  ]
})
export class FlipperModule {
  static create(flippers: string[]): ModuleWithProviders {
    return {
      ngModule: FlipperModule,
      providers: [
        { provide: FlipperService, useValue: new FlipperService(flippers) }
      ]
    };
  }
}
