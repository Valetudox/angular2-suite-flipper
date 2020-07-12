import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { FlipperService } from './src/flipper.service';
import { FlipperIsOffPipe } from './src/is-off.pipe';
import { FlipperIsOnPipe } from './src/is-on.pipe';
export * from './src/flipper.service';
export * from './src/is-off.pipe';
export * from './src/is-on.pipe';

export function flippersFactory(): string[] {
  return [];
}

@NgModule({
  declarations: [FlipperIsOffPipe, FlipperIsOnPipe],
  exports: [FlipperIsOffPipe, FlipperIsOnPipe],
})
export class FlipperModule {
  static forRoot(
    providedFlippers: Provider = {
      provide: 'flippers',
      useFactory: flippersFactory,
    }
  ): ModuleWithProviders {
    return {
      ngModule: FlipperModule,
      providers: [FlipperService, providedFlippers],
    };
  }
}
