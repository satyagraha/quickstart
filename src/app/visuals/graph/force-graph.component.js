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
var d3_service_1 = require("../../d3/d3.service");
var ForceGraphComponent = (function () {
    function ForceGraphComponent(d3Service, ref) {
        this.d3Service = d3Service;
        this.ref = ref;
        this._options = { width: 800, height: 600 };
    }
    ForceGraphComponent.prototype.onResize = function (event) {
        this.graph.initSimulation(this.options);
    };
    ForceGraphComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** Receiving an initialized simulated graph from our custom d3 service */
        this.graph = this.d3Service.getForceDirectedGraph(this.nodes, this.links, this.options);
        /** Binding change detection check on each tick
         * This along with an onPush change detection strategy should enforce checking only when relevant!
         * This improves scripting computation duration in a couple of tests I've made, consistently.
         * Also, it makes sense to avoid unnecessary checks when we are dealing only with simulations data binding.
         */
        this.graph.ticker.subscribe(function (d) {
            _this.ref.markForCheck();
        });
    };
    ForceGraphComponent.prototype.ngAfterViewInit = function () {
        this.graph.initSimulation(this.options);
    };
    Object.defineProperty(ForceGraphComponent.prototype, "options", {
        get: function () {
            return this._options = {
                width: window.innerWidth,
                height: window.innerHeight
            };
        },
        enumerable: true,
        configurable: true
    });
    return ForceGraphComponent;
}());
__decorate([
    core_1.Input('nodes'),
    __metadata("design:type", Array)
], ForceGraphComponent.prototype, "nodes", void 0);
__decorate([
    core_1.Input('links'),
    __metadata("design:type", Array)
], ForceGraphComponent.prototype, "links", void 0);
__decorate([
    core_1.HostListener('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ForceGraphComponent.prototype, "onResize", null);
ForceGraphComponent = __decorate([
    core_1.Component({
        selector: 'graph',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        template: "\n    <svg #svg [attr.width]=\"_options.width\" [attr.height]=\"_options.height\">\n      <g [zoomableOf]=\"svg\">\n        <g [linkVisual]=\"link\" *ngFor=\"let link of links\"></g>\n        <g [nodeVisual]=\"node\" *ngFor=\"let node of nodes\"\n           [draggableNode]=\"node\" [draggableInGraph]=\"graph\"></g>\n      </g>\n    </svg>\n  ",
        styleUrls: ['./force-graph.component.css']
    }),
    __metadata("design:paramtypes", [d3_service_1.D3Service, core_1.ChangeDetectorRef])
], ForceGraphComponent);
exports.ForceGraphComponent = ForceGraphComponent;
//# sourceMappingURL=force-graph.component.js.map