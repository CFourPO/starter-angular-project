import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[base-directive]'
})
export class BaseDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
