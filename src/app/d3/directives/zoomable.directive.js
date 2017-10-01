// path : d3/directives/zoomable.directive.ts
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var d3_service_1 = require("../d3.service");
var ZoomableDirective = (function () {
    function ZoomableDirective(d3Service, gElementRef) {
        this.d3Service = d3Service;
        this.gElementRef = gElementRef;
        console.log("ZoomableOf()", d3Service, gElementRef);
    }
    ZoomableDirective.prototype.ngOnInit = function () {
        console.log("ZoomableOf.ngOnInit", this.gElementRef, this.svgElement);
        this.d3Service.applyZoomableBehaviour(this.svgElement, this.gElementRef);
    };
    return ZoomableDirective;
}());
__decorate([
    core_1.Input('zoomableOf'),
    __metadata("design:type", Element)
], ZoomableDirective.prototype, "svgElement", void 0);
ZoomableDirective = __decorate([
    core_1.Directive({
        selector: '[zoomableOf]'
    }),
    __metadata("design:paramtypes", [d3_service_1.D3Service, core_1.ElementRef])
], ZoomableDirective);
exports.ZoomableDirective = ZoomableDirective;
//# sourceMappingURL=zoomable.directive.js.map