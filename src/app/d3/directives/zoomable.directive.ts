// path : d3/directives/zoomable.directive.ts

import { Directive, Input, ElementRef } from '@angular/core';
import { D3Service } from '../d3.service';

@Directive({
    selector: '[zoomableOf]'
})
export class ZoomableDirective {
    @Input('zoomableOf') svgElement: Element;

    constructor(private d3Service: D3Service, private gElementRef: ElementRef) {
      console.log("ZoomableOf()", d3Service, gElementRef)
    }

    ngOnInit() {
      console.log("ZoomableOf.ngOnInit", this.gElementRef, this.svgElement)

      this.d3Service.applyZoomableBehaviour(this.svgElement, this.gElementRef);
    }
}
