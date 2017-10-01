import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'
import { Headers, Http } from '@angular/http';
import { D3Service } from './d3util/d3util.service';

@Component({
  selector: 'simple-graph',
  template: `
  <h2>Simple Graph</h2>
  <div #holder [innerHTML]="svgHTML"></div>
  `,
})
export class SimpleGraphComponent implements OnInit, AfterViewInit, OnChanges {
  @ViewChild('holder') holder:ElementRef
  svgHTML: SafeHtml

  constructor(
    private http: Http,
    private sanitizer:DomSanitizer,
    private d3Service: D3Service,
  ) { }

  ngOnInit(): void {
    console.log("SimpleGraphComponent", "ngOnInit")
    this.http.get('./data/access.no-title.svg').subscribe(
      success => {
        console.debug("success", success.text())
        this.svgHTML = this.sanitizer.bypassSecurityTrustHtml(success.text())
      },
      failure => {
        console.log("failure", failure)
      }
    )
  }

  // zooming facility is lost if we navigate back to the graph view from another tab; possible causes:
  // https://github.com/angular/angular/issues/5870
  // https://github.com/angular/angular/issues/8012
  ngAfterViewInit() {
    console.log("ngAfterViewInit")
    console.log("holder", this.holder)
    const divElement = this.holder.nativeElement
    console.log("divElement", divElement)
    setTimeout(() => {
      console.log("applying zoom")
      const svgElement = divElement.querySelector("svg")
      console.log("svgElement", svgElement)
      const gElement = divElement.querySelector("svg > g")
      console.log("gElement", gElement)
      this.d3Service.applyZoomableBehaviour(svgElement, new ElementRef(gElement))
    }, 0);
  }

}
