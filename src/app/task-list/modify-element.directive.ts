import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// if description > 30 chars, then replace the rest with ...
@Directive({
  selector: '[appModifyElement]',
})
export class ModifyElementDirective {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
  ) {}

  value = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.value = this.el.nativeElement.innerText;
    if (this.el.nativeElement.innerText.length > 30) {
      this.el.nativeElement.innerText =
        this.el.nativeElement.innerText.slice(0, 30) + '...';
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.innerText = this.value;
  }
}
