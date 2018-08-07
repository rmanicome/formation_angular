import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appTestDirectives]'
})
export class TestDirectivesDirective {
  @HostBinding('class.button-test') isActive = false;

  constructor() { }

  @HostListener('click')
  handleClick() {
    this.isActive = !this.isActive;
  }
}
