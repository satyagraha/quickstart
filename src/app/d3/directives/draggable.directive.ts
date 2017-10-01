// path : d3/directives/draggable.directives.ts

import { Directive, Input, ElementRef } from '@angular/core';
import { D3Service } from '../d3.service';
import { Node, ForceDirectedGraph } from '../models/index';

@Directive({
    selector: '[draggableNode]'
})
export class DraggableDirective {
    @Input('draggableNode') node: Node;
    @Input('draggableInGraph') graph: ForceDirectedGraph;

    constructor(private d3Service: D3Service, private _element: ElementRef) {

     }

    ngOnInit() {
      this.d3Service.applyDraggableBehaviour(this._element, this.node, this.graph);
    }
}
