import { Component } from '@angular/core';
import APP_CONFIG from './demo.config';
import { Node, Link } from './d3/index';

@Component({
  selector: 'd3-graph',
  template: `
    <graph [nodes]="nodes" [links]="links"></graph>
  `,
  //styleUrls: ['./app.component.css']
})

export class DemoComponent {
  nodes: Node[] = [];
  links: Link[] = [];

  constructor() {
    const N = APP_CONFIG.N
    const getIndex = (num: number) => num - 1;

    /** constructing the nodes array */
    for (let i = 1; i <= N; i++) {
      this.nodes.push(new Node(i.toString()));
    }

    for (let i = 1; i <= N; i++) {
      for (let m = 2; i * m <= N; m++) {
        /** increasing connections toll on connecting nodes */
        const src = this.nodes[getIndex(i)]
        const dst = this.nodes[getIndex(i * m)]
        src.linkCount++;
        dst.linkCount++;

        /** connecting the nodes before starting the simulation */
        this.links.push(new Link(src, dst));
      }
    }
  }
}
