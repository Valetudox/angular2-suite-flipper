# Angular Suite Flipper

This is a simple flipper solution for angular. You should provide the flippers.

Install
---------

```bash
npm install --save @emartech/angular-suite-flipper
```
Setup
---------

```javascript
import { FlipperModule } from '@emartech/angular-suite-flipper';

@NgModule({
  imports: [
    BrowserModule,
    FlipperModule.create(['dummy', 'test'])
  ],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
```

Usage in template
---------

```javascript

import { IsOnPipe } from '@emartech/angular-suite-flipper';
import { IsOffPipe } from '@emartech/angular-suite-flipper';

@Component({
  selector: '<sub-app>',
  template: `
    <h1 *ngIf="'dummy' | isOff">With</h1>
    <h1 *ngIf="'dummy' | isOn">Without</h1>
  `
})
export class App {}
```

Usage in Controller
---------

```javascript

import { FlipperService } from '@emartech/angular-suite-flipper';

@Component({
  selector: '<sub-app>',
  template: `Some content`
})
export class App {

  constructor(flipperService: FlipperService) {
    if (flipperService.isOn('dummy')) console.log(1);
    if (flipperService.isOff('dummy')) console.log(2);
  }
}
```

