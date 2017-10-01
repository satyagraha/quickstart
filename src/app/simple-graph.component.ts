import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { Headers, Http } from '@angular/http';

@Component({
  selector: 'simple-graph',
  template: `
  <h2>Simple Graph</h2>
  <div [innerHTML]="svgHTML"></div>
  `,
})
export class SimpleGraphComponent implements OnInit {
  // @Input() hero: Hero
  svgHTML: SafeHtml

  constructor(
    private http: Http,
    private sanitizer:DomSanitizer,
  ) { }

  ngOnInit(): void {
    console.log("SimpleGraphComponent", "ngOnInit")
    this.http.get('./data/access.no-title.svg').subscribe(
      success => {
        console.log("success", success.text())
        this.svgHTML = this.sanitizer.bypassSecurityTrustHtml(success.text())
      },
      failure => {
        console.log("failure", failure)
      }
    )
  }

}
