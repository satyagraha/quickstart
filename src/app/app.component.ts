import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/simple-graph" routerLinkActive="active">Simple Graph</a>
      <a routerLink="/d3-graph" routerLinkActive="active">D3 Graph</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css'],  
})
export class AppComponent {
  title = 'Tour of Heroes';
}
