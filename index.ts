import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { FlipperIsOffPipe, FlipperIsOnPipe, FlipperService } from './src';
export * from './src';

export function flippersFactory(): string[] { return []; }

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
  static forRoot(
    providedFlippers: Provider = { provide: 'flippers', useFactory: flippersFactory }
  ): ModuleWithProviders {
    return {
      ngModule: FlipperModule,
      providers: [FlipperService, providedFlippers]
    };
  }
}
