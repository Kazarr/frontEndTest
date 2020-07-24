import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appPayed]'
})
export class PayedDirective {

  constructor(private element: ElementRef) {
    if (this.element.nativeElement.innerText >= 0.5) {
      console.log('wtf');
      // this.element.nativeElement.innerText = 'zaplatena'
      this.element.nativeElement.className = "badge-success";
    }else {
      this.element.nativeElement.innerText = 'nezaplatena'
    }
  }

}
