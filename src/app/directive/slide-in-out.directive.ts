import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[slideInOut]'
})
export class SlideInOutDirective implements OnInit {
  @Input('transition') transitionName = '';

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.style.transition = this.transitionName;
  }
}
