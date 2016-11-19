import { NgModule, ModuleWithProviders } from '@angular/core';
export * from './pipe';
export * from './service';
import { FlipperIsOffPipe, FlipperIsOnPipe } from './pipe';
import { FlipperService } from './service';

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
