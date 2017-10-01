// path : d3/d3.service.ts

import { ElementRef, Injectable, EventEmitter } from '@angular/core';
import { Node, Link, ForceDirectedGraph } from './models/index';
import * as d3 from 'd3';

@Injectable()
export class D3Service {
  /** This service will provide methods to enable user interaction with elements
  * while maintaining the d3 simulations physics
  */
  constructor() {
    console.log("D3Service()")
   }

  /** A method to bind a pan and zoom behaviour to an svg element */
  applyZoomableBehaviour(svgElement: Element, gElement: ElementRef) {
    console.log("applyZoomableBehaviour", svgElement, gElement)

    const svg = d3.select(svgElement);
    console.log("svg", svg)
    const container = d3.select(gElement.nativeElement);

    const zoomed = () => {
      console.log("zoomed")
      let transform = d3.event.transform;
      container.attr("transform", "translate(" + transform.x + "," + transform.y + ") scale(" + transform.k + ")");
    }

    const zoom = d3.zoom().on("zoom", zoomed);
    svg.call(zoom);
  }

  /** A method to bind a draggable behaviour to an svg element */
  applyDraggableBehaviour(elementRef: ElementRef, node: Node, graph: ForceDirectedGraph) {
    // console.log("applyDraggableBehaviour", elementRef, node, graph)

    let d3element = d3.select(elementRef.nativeElement);

    function started() {
      if (!d3.event.active) {
        graph.simulation.alphaTarget(0.3).restart();
      }

      d3.event.on("drag", dragged).on("end", ended);

      function dragged() {
        node.fx = d3.event.x;
        node.fy = d3.event.y;
      }

      function ended() {
        if (!d3.event.active) {
          graph.simulation.alphaTarget(0);
        }

        node.fx = null;
        node.fy = null;
      }
    }

    d3element.call(d3.drag()
      .on("start", started));
  }

  /** The interactable graph we will simulate in this article
  * This method does not interact with the document, purely physical calculations with d3
  */
  getForceDirectedGraph(nodes: Node[], links: Link[], options: { width: number, height: number }) {
    let graph = new ForceDirectedGraph(nodes, links, options);
    return graph;
  }
}
