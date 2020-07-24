import {Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPayed]'
})
export class PayedDirective {

  constructor(private element: ElementRef,
              private renderer: Renderer2) {
    if (this.element.nativeElement.innerText >= 0.5) {
      this.renderer.addClass(this.element.nativeElement, 'badge-success')
      this.renderer.setProperty(this.element.nativeElement, 'innerHTML','badge-success')
      // this.element.nativeElement.innerText = 'zaplatena'
      this.element.nativeElement.className = "badge-success";
    }else {
      this.renderer.addClass(this.element.nativeElement, 'badge-primary')
      // this.element.nativeElement.innerText = 'nezaplatena'
    }
  }

}
