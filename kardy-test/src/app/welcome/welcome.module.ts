import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';

@NgModule({
  declarations: [WelcomeComponent],
  exports: [
    WelcomeComponent
  ],
  imports: [
    CommonModule
  ]
})
// @ts-ignore
export class WelcomeModule {
}
